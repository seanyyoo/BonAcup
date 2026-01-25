import { site } from '../config'
import { useLang } from '../context/LangContext'

export function Hero() {
  const { t } = useLang()
  return (
    <section className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={site.heroImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-main/60" aria-hidden />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center py-14 sm:py-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-on-dark tracking-tight">
          {t('hero.headline')}
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-gold/95">
          {t('hero.subline')}
        </p>
        <p className="mt-6 text-lg sm:text-xl text-on-dark/90 max-w-2xl mx-auto">
          {t('hero.intro')}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold/90 transition-colors shadow-lg"
          >
            {t('hero.bookVisit')}
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center px-8 py-4 border-2 border-on-dark/60 text-on-dark font-semibold rounded-lg hover:bg-on-dark/10 transition-colors"
          >
            {t('hero.call')} {site.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
