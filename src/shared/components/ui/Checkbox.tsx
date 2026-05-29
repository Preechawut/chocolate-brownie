interface CheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  disabled?: boolean
}

export function Checkbox({ checked, onChange, label, disabled = false }: CheckboxProps) {
  return (
    <label
      className={`inline-flex items-center gap-3 select-none ${
        disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer group'
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => !disabled && onChange(e.target.checked)}
        disabled={disabled}
        className="sr-only"
      />
      <div
        className={`h-4.5 w-4.5 w-[18px] h-[18px] flex items-center justify-center border transition-colors ${
          checked
            ? 'bg-t1 border-t1 text-[var(--bg)]'
            : 'border-[var(--border-strong)] bg-[var(--bg-soft)] group-hover:border-t1'
        }`}
      >
        {checked && (
          <svg
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      {label && <span className="text-[13px] font-medium text-t2 group-hover:text-t1 transition-colors">{label}</span>}
    </label>
  )
}
