import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'horner.draws - Scientific & Comic Art Portfolio',
  description: 'Portfolio showcasing scientific art and comic book illustrations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}