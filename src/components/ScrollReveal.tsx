import { useEffect, useRef, useState, type ReactNode } from 'react'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  /** Atraso antes da animação (ms), após entrar na viewport */
  delayMs?: number
  /** Margem do root do observer (ex.: "-80px 0px" carrega um pouco antes) */
  rootMargin?: string
}

export default function ScrollReveal({
  children,
  className = '',
  delayMs = 0,
  rootMargin = '0px 0px -40px 0px',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setVisible(true)
      return
    }

    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          observer.disconnect()
          if (delayMs > 0) {
            timeoutId = window.setTimeout(() => setVisible(true), delayMs)
          } else {
            setVisible(true)
          }
          break
        }
      },
      { root: null, rootMargin, threshold: 0.06 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (timeoutId !== undefined) window.clearTimeout(timeoutId)
    }
  }, [delayMs, rootMargin])

  return (
    <div
      ref={ref}
      className={`mf-scroll-reveal w-full${visible ? ' mf-scroll-reveal--visible' : ''}${className ? ` ${className}` : ''}`}
      style={
        visible && delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined
      }
    >
      {children}
    </div>
  )
}
