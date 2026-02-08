import { useLang } from '../context/LangContext'

export function Testimonials() {
  const { t } = useLang()
  const items = t('testimonials.items') || []
  return (
    <section id="testimonials" className="relative py-16 sm:py-24 bg-gradient-to-b from-main/95 to-main text-on-dark border-b border-gold/30 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" aria-hidden />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" aria-hidden />
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block mb-4">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Client Reviews</span>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mt-2 w-32 mx-auto"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">{t('testimonials.title')}</h2>
          <p className="mt-4 text-on-dark/80 text-lg leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <blockquote
              key={i}
              className="group relative bg-white/5 backdrop-blur-sm border border-gold/30 rounded-2xl p-6 sm:p-8 flex flex-col transition-all hover:bg-white/10 hover:border-gold/50 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-gold/20 group-hover:text-gold/40 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              {/* Star rating */}
              <div className="flex gap-1 mb-4 justify-center" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-on-dark/95 leading-relaxed flex-grow text-base text-center">&ldquo;{item.quote}&rdquo;</p>
              
              <footer className="mt-6 pt-6 border-t border-gold/20 text-center">
                <p className="font-semibold text-gold text-lg">{item.author}</p>
                <p className="text-on-dark/70 text-sm mt-1">{item.location}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
