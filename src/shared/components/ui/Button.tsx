import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'solid' | 'outline'
  size?: 'sm' | 'md'
  href?: string
  external?: boolean
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  'aria-label'?: string
}

const base = 'inline-flex items-center font-black uppercase tracking-[0.08em] transition-colors'

const variants = {
  solid:   'bg-t1 text-[var(--bg)] hover:opacity-80',
  outline: 'border border-[var(--border2)] text-t1 hover:border-t1 hover:bg-t1 hover:text-[var(--bg)]',
}

const sizes = {
  sm: 'h-9 px-4 text-[11px]',
  md: 'h-10 px-5 text-[12px]',
}

export function Button({
  children,
  variant = 'outline',
  size = 'md',
  href,
  external,
  onClick,
  className = '',
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href && external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={ariaLabel}>{children}</a>
  }
  if (href) {
    return <Link href={href} className={cls} aria-label={ariaLabel}>{children}</Link>
  }
  return <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>{children}</button>
}
