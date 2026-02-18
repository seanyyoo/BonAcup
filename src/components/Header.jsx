import { useState, useRef, useEffect } from 'react'
import { site } from '../config'
import { useLang } from '../context/LangContext'

const navLinks = [
  { href: '#about', labelKey: 'nav.about' },
  { href: '#services', labelKey: 'nav.services' },
  { href: '#conditions', labelKey: 'nav.conditions' },
  { href: '#faq', labelKey: 'nav.faq' },
  { href: '#contact', labelKey: 'nav.contact' },
]

const LOCALES = [
  { id: 'ko', name: '한국어' },
  { id: 'en', name: 'English' },
  { id: 'es', name: 'Español' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef(null)
  const { locale, setLocale, t } = useLang()

  const current = LOCALES.find((l) => l.id === locale) || LOCALES[0]

  // Close language dropdown when clicking outside
  useEffect(() => {
    if (!langOpen) return
    function handleClick(e) {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [langOpen])

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-sm border-b border-main/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-18 items-center justify-between gap-4">
          <a href="#" className="flex-shrink-0 flex items-center" aria-label={t('brand.name')}>
            <img src={site.headerLogo} alt="" className="h-11 sm:h-14 w-auto object-contain" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-end">
            {navLinks.map(({ href, labelKey }) => (
              <a
                key={href}
                href={href}
                className="text-ink-muted hover:text-main text-sm font-medium transition-colors"
                onClick={() => setOpen(false)}
              >
                {t(labelKey)}
              </a>
            ))}
          </nav>

          {/* Language: text + dropdown — visually separate from nav (divider, pill, dropdown) */}
          <div
            ref={langRef}
            className="relative ml-auto flex items-center md:pl-6 md:border-l md:border-main/15"
          >
            <button
              type="button"
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-2 rounded-full border border-main/20 bg-white/70 px-3 py-2 text-sm font-medium text-ink shadow-sm transition-[color,box-shadow] hover:border-main/30 hover:shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-main/30"
              aria-expanded={langOpen}
              aria-haspopup="listbox"
              aria-label="Select language"
            >
              <span>{current.name}</span>
              <svg
                className={`h-4 w-4 text-ink-muted transition-transform ${langOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langOpen && (
              <div
                className="absolute right-0 top-full z-50 mt-2 min-w-[180px] rounded-xl border border-main/15 bg-white py-1.5 shadow-lg"
                role="listbox"
              >
                {LOCALES.map(({ id, name }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => {
                      setLocale(id)
                      setLangOpen(false)
                    }}
                    role="option"
                    aria-selected={locale === id}
                    className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-main/5 ${
                      locale === id ? 'bg-main/5 font-semibold text-main' : 'text-ink'
                    }`}
                  >
                    <span>{name}</span>
                    {locale === id && (
                      <svg className="h-4 w-4 text-main" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-ink rounded-lg hover:bg-main/5"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={t('aria.toggleMenu')}
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav className="md:hidden py-4 border-t border-main/10 flex flex-col gap-2">
            {navLinks.map(({ href, labelKey }) => (
              <a
                key={href}
                href={href}
                className="py-2 text-ink-muted hover:text-main font-medium"
                onClick={() => setOpen(false)}
              >
                {t(labelKey)}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
