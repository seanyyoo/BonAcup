import { useLang } from '../context/LangContext'

export function Recommended() {
  const { t } = useLang()
  const items = t('recommended.items') || []
  return (
    <section id="recommended" className="py-12 sm:py-16 bg-gold/10 border-t border-main/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-main">{t('recommended.title')}</h2>
        <ul className="mt-10 space-y-4">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full bg-main text-on-dark flex items-center justify-center text-sm font-bold"
                aria-hidden
              >
                ✓
              </span>
              <span className="text-ink text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
