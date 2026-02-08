import { useLang } from '../context/LangContext'

export function Benefits() {
  const { t } = useLang()
  const list = t('conditions.list') || []
  return (
    <section id="conditions" className="py-16 sm:py-24 bg-gradient-to-b from-white to-ivory border-t border-main/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header - centered */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block mb-4">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">What We Treat</span>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mt-2 w-32 mx-auto"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-main leading-tight">{t('conditions.title')}</h2>
          <p className="mt-4 text-ink-muted text-lg leading-relaxed max-w-3xl mx-auto">
            {t('conditions.intro')}
          </p>
        </div>

        {/* Conditions Grid */}
        <div className="mb-12">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {list.map((c, i) => (
              <li key={i} className="group flex items-center gap-3 text-ink p-4 bg-white rounded-xl border border-gold/20 shadow-sm hover:shadow-md hover:border-gold/40 transition-all">
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-gold to-gold/80 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform" aria-hidden>
                  <svg className="w-3 h-3 text-main" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="group-hover:text-main transition-colors font-medium text-sm">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What to Expect Card - Centered */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border-2 border-gold/30 bg-white shadow-2xl">
            <div className="p-8 sm:p-10 bg-gradient-to-br from-white to-ivory">
              <div className="text-center">
                <span className="text-3xl block mb-4" aria-hidden>✦</span>
                <h3 className="text-2xl font-bold text-main mb-4">{t('conditions.expectTitle')}</h3>
                <p className="text-ink-muted leading-relaxed mb-6">
                  {t('conditions.expectBody')}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-main text-on-dark font-bold rounded-xl hover:bg-main/90 hover:scale-105 transition-all shadow-lg"
                >
                  {t('conditions.cta')}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
