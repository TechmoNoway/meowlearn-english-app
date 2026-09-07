# MeowLearn 2.0

MeowLearn is a focused English-learning studio built for Vietnamese speakers. Version 2.0 replaces the game-like learning experience with a practical, situation-based curriculum designed to be clear, concise, and immediately useful.

## Technology Stack

- Next.js 16.3.4 with the App Router and Turbopack
- React 19.2
- Clerk 7.9 for authentication
- Drizzle ORM with Neon PostgreSQL
- Tailwind CSS 3.4
- Stripe Billing
- React Admin for the internal content management system

Node.js 20.9 or later is required.

## Getting Started

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

Run the project checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Environment Variables

Create a `.env` file with the following variables:

```dotenv
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Do not use Clerk development keys or Stripe test configuration in production.

## Learning Content

The curriculum source is stored in `scripts/seed-data.ts` and supports one focused learning path:

- English for Vietnamese speakers
- 8 units
- 32 lessons
- 128 challenges
- 384 answer options

Seed the development database with:

```bash
npm run db:seed
```

> Warning: the seed command rebuilds the development dataset. It deletes existing courses, learning progress, and subscription records before creating the new curriculum. Do not run it directly against a production database. Use a backed-up migration process instead.

## User Flow

New learners can experience the product before creating an account:

1. Choose a learning goal.
2. Complete a sample English challenge.
3. Receive immediate feedback and an explanation.
4. Review a recommended daily learning plan.
5. Create an account to save progress.
6. Continue from the daily lesson dashboard.

## Project Structure

- `app/(marketing)` — public landing page
- `app/(marketing)/start` — pre-registration trial onboarding
- `app/(main)` — learning studio, curriculum, lessons, goals, and support store
- `app/admin` — internal content administration
- `actions` — Server Actions for learning progress and billing
- `db` — Drizzle schema and database queries
- `scripts/seed-data.ts` — English curriculum with Vietnamese explanations
- `scripts/seed.ts` — development dataset builder

## Version 2.0 Upgrade Notes

- Migrated `middleware.ts` to the Next.js 16 `proxy.ts` convention.
- Migrated Clerk `auth()` and `currentUser()` to asynchronous server APIs.
- Replaced Clerk `SignedIn` and `SignedOut` components with `Show`.
- Migrated dynamic route parameters and `headers()` to Async Request APIs.
- Upgraded Stripe to API version `2026-08-26.dahlia`; subscription periods are read from subscription items.
- Migrated ESLint to flat configuration and the standalone ESLint CLI.
- Restricted the product, curriculum, and administration flow to English learning for Vietnamese speakers.
- Replaced the original language-selection flow with a trial-first onboarding experience.

See `ROADMAP.md` for planned improvements and production-readiness work.
