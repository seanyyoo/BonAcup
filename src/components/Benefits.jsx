import { site } from '../config'
import { useLang } from '../context/LangContext'

export function Benefits() {
  const { t } = useLang()
  const list = t('conditions.list') || []
  return (
    <section id="conditions" className="py-12 sm:py-16 bg-white border-t border-main/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-main">{t('conditions.title')}</h2>
            <p className="mt-4 text-ink-muted text-lg">
              {t('conditions.intro')}
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {list.map((c, i) => (
                <li key={i} className="flex items-center gap-3 text-ink">
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-ink-muted text-sm">
              {t('conditions.notSure')}
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-main/10 bg-white shadow-lg">
            <img
              src={site.benefitsImage}
              alt=""
              className="w-full aspect-[16/10] object-cover"
            />
            <div className="p-6 sm:p-8 border-t border-main/10">
              <h3 className="text-xl font-semibold text-main">{t('conditions.expectTitle')}</h3>
              <p className="mt-3 text-ink-muted leading-relaxed">
                {t('conditions.expectBody')}
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center text-main font-semibold hover:underline"
              >
                {t('conditions.cta')}
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
