interface BadgeProps {
  children: React.ReactNode
  size?: 'sm' | 'md'
  className?: string
}

const sizes = {
  sm: 'px-2.5 py-[2px] text-[10px]',
  md: 'px-3 py-[3px] text-[11px]',
}

export function Badge({ children, size = 'md', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center border border-[var(--border2)] bg-[var(--bg-soft)] font-medium text-t2 ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  )
}