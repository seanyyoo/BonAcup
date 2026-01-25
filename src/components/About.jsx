import { site } from '../config'
import { useLang } from '../context/LangContext'

export function About() {
  const { t } = useLang()
  const practitioner = t('about.practitioner')
  return (
    <section id="about" className="py-12 sm:py-16 bg-ivory border-t border-gold/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-main">{t('about.title')}</h2>
            <p className="mt-6 text-ink-muted text-lg leading-relaxed">
              {t('about.approachIntro')}
            </p>
            <p className="mt-4 text-ink-muted text-lg leading-relaxed">
              {t('about.approachIntro2')}
            </p>
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-main">{t('about.philosophyTitle')}</h3>
              <p className="mt-3 text-ink-muted leading-relaxed">
                {t('about.philosophyBody')}
              </p>
              <p className="mt-3 text-ink-muted leading-relaxed">
                {t('about.philosophyBody2')}
              </p>
            </div>
            <div className="mt-10">
              <div className="flex items-start gap-4">
                <img
                  src={site.practitionerImage}
                  alt={practitioner.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-gold/60"
                />
                <div>
                  <p className="font-semibold text-ink">{practitioner.name}</p>
                  <p className="text-ink-muted text-sm">{practitioner.title}</p>
                  <p className="mt-2 text-ink-muted text-sm leading-relaxed">
                    {practitioner.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-main/5 aspect-[4/3] lg:sticky lg:top-28">
            <img
              src={site.aboutImage}
              alt={t('about.aboutImageAlt')}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
