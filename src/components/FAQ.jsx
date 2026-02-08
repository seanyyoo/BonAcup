import { useState } from 'react'
import { useLang } from '../context/LangContext'

export function FAQ() {
  const [open, setOpen] = useState(null)
  const { t } = useLang()
  const items = t('faq.items') || []
  return (
    <section id="faq" className="py-16 sm:py-24 bg-ivory border-t border-main/10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Common Questions</span>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mt-2 w-32 mx-auto"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-main">{t('faq.title')}</h2>
          <p className="mt-4 text-ink-muted text-lg">
            {t('faq.subtitle')}
          </p>
        </div>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="group border-2 border-main/10 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md hover:border-gold/30 transition-all"
            >
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-ink hover:bg-gradient-to-r hover:from-gold/5 hover:to-transparent transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-lg">{item.q}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-main/10 flex items-center justify-center transition-all ${open === i ? 'bg-gold rotate-180' : 'group-hover:bg-main/20'}`}>
                  <svg
                    className={`w-5 h-5 text-main transition-transform ${open === i ? 'text-main' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 pt-0 animate-[fadeIn_0.3s_ease-in-out]">
                  <div className="pt-4 border-t border-gold/20">
                    <p className="text-ink-muted leading-relaxed text-base">{item.a}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border-2 border-gold/30 shadow-sm">
          <p className="text-ink-muted">
            <span className="font-semibold text-main">Still have questions?</span> We're here to help!
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center text-main font-semibold hover:text-gold transition-colors"
          >
            Contact us directly
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
