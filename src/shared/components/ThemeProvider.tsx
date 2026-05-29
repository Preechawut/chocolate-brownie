'use client'

import { createContext, useContext } from 'react'

const ThemeContext = createContext<{ toggle: () => void }>({ toggle: () => {} })

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  function toggle() {
    const isDark = document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
