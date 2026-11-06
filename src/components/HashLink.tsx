import { Link, useLocation } from 'react-router-dom'
import type { ComponentProps } from 'react'

type HashLinkProps = ComponentProps<typeof Link> & {
  hash: string
}

/** Link para uma âncora na página atual (funciona na home com React Router). */
export default function HashLink({ hash, to, ...props }: HashLinkProps) {
  const { pathname } = useLocation()
  const base = to ?? pathname
  const h = hash.startsWith('#') ? hash : `#${hash}`
  return <Link to={`${base}${h}`} {...props} />
}
