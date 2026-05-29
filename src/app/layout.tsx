import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CommandPaletteProvider } from '@/shared/components/CommandPaletteProvider'
import { CommandPalette } from '@/shared/components/CommandPalette'
import { ThemeProvider } from '@/shared/components/ThemeProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Your Name — Full-Stack Developer',
  description: 'Building fast, purposeful web applications.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var s=localStorage.getItem('theme');if((s||'dark')==='dark')document.documentElement.classList.add('dark')})()` }} />
      </head>
      <body>
        <ThemeProvider>
          <CommandPaletteProvider>
            <CommandPalette />
            {children}
          </CommandPaletteProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
