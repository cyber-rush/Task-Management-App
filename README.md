This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Sorting Logic
The task management app sorts tasks by their priority levels to ensure that important tasks appear first:

Priority Levels:

- high: High-priority tasks are the most important and appear at the top.
- medium: Medium-priority tasks follow.
- low: Low-priority tasks appear at the bottom.
Completed Tasks: All completed tasks are sorted to appear at the bottom of the list, regardless of their priority level. This ensures that users can focus on pending tasks first.

## Sorting Implementation
The sorting function uses JavaScript’s sort method, which sorts tasks in place based on a comparison function.
