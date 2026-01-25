import { useState } from 'react'
import { useLang } from '../context/LangContext'

export function FAQ() {
  const [open, setOpen] = useState(null)
  const { t } = useLang()
  const items = t('faq.items') || []
  return (
    <section id="faq" className="py-12 sm:py-16 bg-ivory border-t border-main/10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-main text-center">{t('faq.title')}</h2>
        <p className="mt-4 text-ink-muted text-center">
          {t('faq.subtitle')}
        </p>
        <div className="mt-10 space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="border border-main/10 rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-medium text-ink hover:bg-main/5 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {item.q}
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-ink-muted transition-transform ${open === i ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-4 pt-0">
                  <p className="text-ink-muted leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
