'use client'

import React, { useState, useRef, useEffect } from 'react'

interface DropdownOption {
  value: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
}

interface DropdownProps {
  value: string
  onChange: (value: string) => void
  options: DropdownOption[]
  placeholder?: string
}

export function Dropdown({ value, onChange, options, placeholder = 'Select option' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectedOption = options.find((opt) => opt.value === value)
  const SelectedIcon = selectedOption?.icon

  return (
    <div ref={containerRef} className="relative w-full text-[13px]">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-full items-center justify-between border border-[var(--border2)] bg-[var(--bg-soft)] px-3 text-t1 hover:border-t1 transition-colors"
      >
        <div className="flex items-center gap-2.5">
          {SelectedIcon && <SelectedIcon className="h-4 w-4 text-t2" />}
          <span className={selectedOption ? 'text-t1 font-medium' : 'text-t3'}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        <svg
          className={`h-4 w-4 text-t3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full border border-[var(--border-strong)] bg-[var(--bg)] shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
          <div className="max-h-60 overflow-y-auto py-1">
            {options.length === 0 ? (
              <div className="px-3 py-2 text-t3">No options</div>
            ) : (
              options.map((opt) => {
                const Icon = opt.icon
                const isSelected = opt.value === value
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onChange(opt.value)
                      setIsOpen(false)
                    }}
                    className={`flex h-9 w-full items-center gap-2.5 px-3 text-left transition-colors hover:bg-[var(--bg-soft)]
                      ${isSelected ? 'font-bold text-t1 bg-[var(--bg-mute)]' : 'text-t2 hover:text-t1'}
                    `}
                  >
                    {Icon && <Icon className="h-4 w-4 shrink-0" />}
                    <span className="truncate">{opt.label}</span>
                  </button>
                )
              })
            )}
          </div>
        </div>
      )}
    </div>
  )
}
