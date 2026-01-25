import { useLang } from '../context/LangContext'

export function Testimonials() {
  const { t } = useLang()
  const items = t('testimonials.items') || []
  return (
    <section id="testimonials" className="py-12 sm:py-16 bg-main text-on-dark border-b border-gold/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">{t('testimonials.title')}</h2>
          <p className="mt-4 text-on-dark/80 text-lg">
            {t('testimonials.subtitle')}
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <blockquote
              key={i}
              className="bg-main/80 border border-gold/20 rounded-2xl p-6 sm:p-8 flex flex-col transition-shadow hover:shadow-lg"
            >
              <p className="text-on-dark/95 leading-relaxed flex-grow">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-6">
                <p className="font-semibold text-gold">{item.author}</p>
                <p className="text-on-dark/70 text-sm">{item.location}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
