"use client";

import '@/scss/global.scss';

// import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// export const metadata: Metadata = {
//   title: 'KGEC NAAC Feedback Form',
//   description: '',
// };

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={inter.className}>
            <QueryClientProvider client={queryClient}>
            {children}
            </QueryClientProvider>
          </body>
      </html>
  );
}
