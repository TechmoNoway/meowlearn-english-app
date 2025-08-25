
# MeowLearn English App

This is a [Next.js](https://nextjs.org/) app for learning English, featuring lessons, challenges, and progress tracking. The project uses Drizzle ORM and Neon serverless database for backend data management. UI is styled with Tailwind CSS.

## Features

- Multi-unit, multi-lesson structure for English learning
- Each lesson contains multiple challenges (questions)
- Each challenge has multiple options, with support for images and audio
- User progress and subscription tracking
- Admin panel for content management

## Getting Started

First, install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Seeding

To seed the database with sample lessons, challenges, and options, run:

```bash
npm run seed
```

This will populate the database with initial units, lessons, challenges, and options. You can customize the seed data in `scripts/seed.ts`.

## Project Structure

- `app/` - Main Next.js app pages and layouts
- `components/` - Reusable UI components
- `db/` - Drizzle ORM schema and queries
- `scripts/seed.ts` - Database seeding script

## Adding Lessons & Questions

To add more lessons or questions, edit `scripts/seed.ts` and add entries to the `lessons`, `challenges`, and `challengeOptions` arrays. Each lesson can have multiple challenges, and each challenge can have multiple options (with text, image, and audio).


## Resources

- [Next.js Documentation](https://nextjs.org/docs) — Features and API reference
- [Learn Next.js](https://nextjs.org/learn) — Interactive tutorial
- [Next.js GitHub repository](https://github.com/vercel/next.js/)

## Deployment

Deploy easily on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

See [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
