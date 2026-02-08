import { useLang } from '../context/LangContext'

const icons = {
  needle: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21l18-18M6 18L18 6M9 21l12-12M12 21l9-9" />
      <circle cx="19" cy="5" r="2" strokeWidth={1.5} />
    </svg>
  ),
  cup: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 8a6 6 0 0112 0v8a6 6 0 01-12 0V8z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 8c0-2 1-3 2-4 M18 8c0-2-1-3-2-4" />
      <circle cx="12" cy="14" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  moxa: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v3m0 0a6 6 0 00-6 6v9h12v-9a6 6 0 00-6-6z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3c.5 1 1 2 3 2s2.5-1 3-2M7.5 18h9" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 10c1-1 2-1 2-1s1 0 2 1" opacity="0.5" />
    </svg>
  ),
  herbs: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8m0 0C10 11 8 9 6 7c0 0 2 1 4 3 0-2-1-4-2-6 2 0 4 1 4 3V7m0 6c2-2 4-4 6-6 0 0-2 1-4 3 0-2 1-4 2-6-2 0-4 1-4 3V7" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 15c-1 2-2 4-2 6h10c0-2-1-4-2-6" />
    </svg>
  ),
}

export function Services() {
  const { t } = useLang()
  const items = t('services.items') || []
  return (
    <section id="services" className="relative py-16 sm:py-24 bg-gradient-to-b from-main via-main to-main/95 text-on-dark border-b border-gold/40 overflow-hidden">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} aria-hidden />
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block mb-4">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Our Treatments</span>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mt-2 w-32 mx-auto"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">{t('services.title')}</h2>
          <p className="mt-4 text-on-dark/80 text-lg leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((s, i) => (
            <div
              key={i}
              className="group relative bg-main/60 backdrop-blur-sm border border-gold/30 rounded-2xl p-6 flex flex-col transition-all hover:bg-main/80 hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/10 group-hover:to-transparent transition-all" aria-hidden />
              
              <div className="relative text-center">
                <div className="inline-flex p-3 bg-gold/20 rounded-xl text-gold group-hover:bg-gold group-hover:text-main transition-all mx-auto">
                  {icons[s.icon] || icons.needle}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-on-dark/80 text-sm leading-relaxed flex-grow">
                  {s.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gold/20">
                  <span className="text-gold text-xs font-medium uppercase tracking-wide group-hover:underline">Learn more →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
