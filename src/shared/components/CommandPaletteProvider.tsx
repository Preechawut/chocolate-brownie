'use client'

import { createContext, useContext, useState } from 'react'

interface Ctx {
  open: boolean
  setOpen: (_v: boolean) => void
}

const CommandPaletteContext = createContext<Ctx>({ open: false, setOpen: () => {} })

export function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <CommandPaletteContext.Provider value={{ open, setOpen }}>
      {children}
    </CommandPaletteContext.Provider>
  )
}

export function useCommandPalette() {
  return useContext(CommandPaletteContext)
}
