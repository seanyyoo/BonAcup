import { useLang } from '../context/LangContext'

export function Closing() {
  const { t } = useLang()
  const line1 = t('closing.line1')
  const line2 = t('closing.line2')
  const cta = t('closing.cta')
  return (
    <section className="py-12 sm:py-16 bg-main text-on-dark border-t-4 border-gold">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-2xl sm:text-3xl font-bold">{line1}</p>
        <p className="mt-4 text-xl text-on-dark/90">{line2}</p>
        <a
          href="#contact"
          className="mt-10 inline-flex items-center px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold/90 transition-colors shadow-lg"
        >
          {cta}
        </a>
      </div>
    </section>
  )
}
