import { site } from '../config'
import { useLang } from '../context/LangContext'

export function Hero() {
  const { t } = useLang()
  return (
    <section className="relative min-h-[75vh] sm:min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={site.heroImage}
          alt=""
          className="w-full h-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-main/70 via-main/60 to-main/50" aria-hidden />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
        <div className="inline-block mb-6 px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full border border-gold/40">
          <span className="text-gold text-sm font-medium tracking-wide">✦ {t('hero.subline')} ✦</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-on-dark tracking-tight leading-tight drop-shadow-lg">
          {t('hero.headline')}
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-on-dark/95 max-w-2xl mx-auto leading-relaxed">
          {t('hero.intro')}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center px-8 py-4 bg-gold text-ink font-semibold rounded-xl hover:bg-gold/90 hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
          >
            {t('hero.bookVisit')}
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center px-8 py-4 border-2 border-on-dark/70 bg-on-dark/10 backdrop-blur-sm text-on-dark font-semibold rounded-xl hover:bg-on-dark/20 hover:border-on-dark transition-all"
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
