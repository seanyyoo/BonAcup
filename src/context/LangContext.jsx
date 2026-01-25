import { createContext, useContext, useState, useCallback, useMemo } from 'react'
import { translations } from '../i18n/translations'

const STORAGE_KEY = 'bonacup-lang'

function get(obj, path) {
  const parts = path.split('.')
  let cur = obj
  for (const p of parts) {
    if (cur == null) return undefined
    cur = /^\d+$/.test(p) ? cur[parseInt(p, 10)] : cur[p]
  }
  return cur
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved && (saved === 'ko' || saved === 'en' || saved === 'es')) return saved
    } catch (_) {}
    return 'ko'
  })

  const setLocale = useCallback((next) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch (_) {}
  }, [])

  const t = useCallback(
    (key) => {
      let v = get(translations[locale], key)
      if (v === undefined) v = get(translations.en, key)
      return v ?? key
    },
    [locale]
  )

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
