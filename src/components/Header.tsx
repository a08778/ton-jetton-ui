import { CSSProperties, type MouseEvent } from 'react'
import { TonConnectButton } from '@tonconnect/ui-react'
import type { HeaderProps } from '../types'

const menuItems: Array<{ id: HeaderProps['currentPage']; label: string }> = [
  { id: 'home', label: 'Home' },
  { id: 'transfer', label: 'Transfer' },
]

const tonConnectStyle: CSSProperties = { height: '36px' }

const pagePaths: Record<HeaderProps['currentPage'], string> = {
  home: '/',
  transfer: '/transfer',
}

function navigateTo(path: string) {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL
  const target = path === '/' ? `${base}/` : `${base}${path}`

  window.history.pushState({}, '', target)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

function Header({ currentPage }: HeaderProps) {
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`
  const handleNavigate = (event: MouseEvent<HTMLAnchorElement>, path: string) => {
    event.preventDefault()

    if (window.location.pathname === new URL(event.currentTarget.href).pathname) {
      return
    }

    navigateTo(path)
  }

  return (
    <header className="app-header">
      <div className="header-top">
        <div className="brand-block">
          <img className="brand-logo" src={logoSrc} alt="TON Jetton UI logo" />
          <div className="header-copy">
            <span className="app-eyebrow">TON Jetton UI</span>
            <p>UI for TON Jetton contracts</p>
          </div>
        </div>
        <nav className="main-menu" aria-label="Main menu">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`${import.meta.env.BASE_URL.replace(/\/$/, '')}${pagePaths[item.id]}`}
              className={item.id === currentPage ? 'menu-link is-active' : 'menu-link'}
              onClick={(event) => handleNavigate(event, pagePaths[item.id])}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="connect-slot">
          <TonConnectButton className="ton-connect-compact" style={tonConnectStyle} />
        </div>
      </div>
    </header>
  )
}

export default Header
