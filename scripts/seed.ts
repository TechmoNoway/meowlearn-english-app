import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../db/schema";
import { curriculum } from "./seed-data";

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required");

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql, { schema });

const coursesData: (typeof schema.courses.$inferInsert)[] = [
  { id: 1, title: "Tiếng Anh cho người Việt", imageSrc: "/uk.svg" },
];

const unitsData: (typeof schema.units.$inferInsert)[] = [];
const lessonsData: (typeof schema.lessons.$inferInsert)[] = [];
const challengesData: (typeof schema.challenges.$inferInsert)[] = [];
const optionsData: (typeof schema.challengeOptions.$inferInsert)[] = [];

let challengeId = 1;
let optionId = 1;

coursesData.forEach((course) => {
  curriculum.forEach((unit, unitIndex) => {
    const unitId = unitIndex + 1;
    unitsData.push({
      id: unitId,
      courseId: course.id!,
      order: unitIndex + 1,
      title: unit.titleVi,
      description: unit.descriptionVi,
    });

    unit.lessons.forEach((lesson, lessonIndex) => {
      const lessonId = unitIndex * 10 + lessonIndex + 1;
      lessonsData.push({
        id: lessonId,
        unitId,
        order: lessonIndex + 1,
        title: lesson.titleVi,
      });

      lesson.phrases.forEach((phrase, phraseIndex) => {
        const currentChallengeId = challengeId++;
        const correctText = phrase.en;
        const otherAnswers = lesson.phrases
          .filter((_, index) => index !== phraseIndex)
          .map((item) => item.en);
        const choices = [correctText, otherAnswers[0], otherAnswers[1]];
        const offset = phraseIndex % choices.length;
        const rotatedChoices = [...choices.slice(offset), ...choices.slice(0, offset)];

        challengesData.push({
          id: currentChallengeId,
          lessonId,
          order: phraseIndex + 1,
          type: phraseIndex % 2 === 0 ? "SELECT" : "ASSIST",
          question: `Cách nói tự nhiên nhất cho “${phrase.vi}” là gì?`,
        });

        rotatedChoices.forEach((text) => {
          optionsData.push({
            id: optionId++,
            challengeId: currentChallengeId,
            text,
            correct: text === correctText,
          });
        });
      });
    });
  });
});

const main = async () => {
  console.log("Rebuilding the English curriculum for Vietnamese learners...");

  await db.delete(schema.challengeProgress);
  await db.delete(schema.challengeOptions);
  await db.delete(schema.challenges);
  await db.delete(schema.lessons);
  await db.delete(schema.units);
  await db.delete(schema.userProgress);
  await db.delete(schema.userSubscription);
  await db.delete(schema.courses);

  await db.insert(schema.courses).values(coursesData);
  await db.insert(schema.units).values(unitsData);
  await db.insert(schema.lessons).values(lessonsData);
  await db.insert(schema.challenges).values(challengesData);
  await db.insert(schema.challengeOptions).values(optionsData);

  console.log(
    `Seeded ${coursesData.length} courses, ${unitsData.length} units, ${lessonsData.length} lessons and ${challengesData.length} challenges.`
  );
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
