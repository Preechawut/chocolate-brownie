import type { Metadata } from 'next'
import { CommandPaletteProvider } from '@/shared/components/CommandPaletteProvider'
import { CommandPalette } from '@/shared/components/CommandPalette'
import { ThemeProvider } from '@/shared/components/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'GAIN',
  description: 'dev profile.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
