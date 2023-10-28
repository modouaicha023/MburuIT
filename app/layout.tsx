// "use client";
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import { TableDemo } from '@/components/tableActon'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mburu IT',
  description: 'Baker Management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem>
          <Header />
          <TableDemo/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
