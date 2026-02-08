import { site } from '../config'
import { useLang } from '../context/LangContext'

export function About() {
  const { t } = useLang()
  const practitioner = t('about.practitioner')
  return (
    <section id="about" className="relative py-16 sm:py-24 bg-gradient-to-b from-ivory to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" aria-hidden />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-main/5 rounded-full blur-3xl" aria-hidden />
      
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section header - centered */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block mb-4">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">About Us</span>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mt-2 w-32 mx-auto"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-main leading-tight">{t('about.title')}</h2>
        </div>

        {/* Main content - clean layout without heavy cards */}
        <div className="space-y-16">
          {/* Introduction text with side border accent */}
          <div className="max-w-3xl mx-auto">
            <div className="border-l-4 border-gold pl-6 space-y-4">
              <p className="text-ink text-lg leading-relaxed">
                {t('about.approachIntro')}
              </p>
              <p className="text-ink-muted text-lg leading-relaxed">
                {t('about.approachIntro2')}
              </p>
            </div>
          </div>

          {/* Image with elegant layout */}
          <div className="relative">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              {/* Left side - image takes 3 columns */}
              <div className="lg:col-span-3">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-gold/30 to-main/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" aria-hidden />
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                    <img
                      src={site.aboutImage}
                      alt={t('about.aboutImageAlt')}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Right side - philosophy takes 2 columns */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-main flex items-center gap-2 mb-4">
                    <span className="text-gold text-3xl">✦</span>
                    {t('about.philosophyTitle')}
                  </h3>
                  <div className="space-y-3 text-ink-muted leading-relaxed">
                    <p>{t('about.philosophyBody')}</p>
                    <p>{t('about.philosophyBody2')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practitioner section - minimal clean design */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Subtle background */}
              <div className="absolute inset-0 bg-gradient-to-r from-main/5 to-transparent rounded-2xl" aria-hidden />
              
              <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 p-8">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-gold to-gold/50 rounded-full blur-sm" aria-hidden />
                  <img
                    src={site.practitionerImage}
                    alt={practitioner.name}
                    className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left space-y-2">
                  <p className="font-bold text-main text-xl">{practitioner.name}</p>
                  <p className="text-gold text-sm font-semibold uppercase tracking-wide">{practitioner.title}</p>
                  <p className="text-ink-muted leading-relaxed pt-2">
                    {practitioner.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
