import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function capitalize(text: string): string {
  if (!text) return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation()

  const parts = pathname.split('/').filter(Boolean)
  const crumbs = parts.map((part, idx) => {
    const to = '/' + parts.slice(0, idx + 1).join('/')
    return { label: capitalize(part.replaceAll('-', ' ')), to }
  })

  if (crumbs.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-600">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        {crumbs.map((c, i) => (
          <React.Fragment key={c.to}>
            <li className="px-1">/</li>
            <li>
              {i === crumbs.length - 1 ? (
                <span className="font-medium text-gray-800">{c.label}</span>
              ) : (
                <Link to={c.to} className="hover:underline">{c.label}</Link>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  )
}

export default React.memo(Breadcrumbs)

