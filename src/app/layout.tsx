import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const roboto = Roboto({
  variable: '--font-roboto-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Learning Flashcards',
  description:
    'Learn English faster with our interactive flashcard app! Practice vocabulary, phrases, and grammar with smart spaced repetition, quizzes, and daily challenges. Track your progress, build custom decks, and improve speaking, listening, and writing skills — all in one place.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
