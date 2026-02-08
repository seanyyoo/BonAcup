import { useLang } from '../context/LangContext'

export function Recommended() {
  const { t } = useLang()
  const items = t('recommended.items') || []
  return (
    <section id="recommended" className="py-16 sm:py-24 bg-gradient-to-br from-gold/15 via-gold/10 to-gold/5 border-t border-main/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-main text-sm font-semibold tracking-wider uppercase">Recommendations</span>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-main/50 to-transparent mt-2 w-32 mx-auto"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-main">{t('recommended.title')}</h2>
        </div>
        <ul className="space-y-4">
          {items.map((item, i) => (
            <li key={i} className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-gold/30 shadow-sm hover:shadow-lg hover:border-gold transition-all">
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-main to-main/80 text-on-dark flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition-transform"
                aria-hidden
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-ink text-lg leading-relaxed group-hover:text-main transition-colors text-center sm:text-left flex-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
