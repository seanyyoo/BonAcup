import { site } from '../config'
import { useLang } from '../context/LangContext'

export function Closing() {
  const { t } = useLang()
  const line1 = t('closing.line1')
  const cta = t('closing.cta')
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-br from-main via-main/95 to-main/90 text-on-dark border-t-4 border-gold overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" aria-hidden />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" aria-hidden />
      
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6 px-6 py-2 bg-gold/20 backdrop-blur-sm rounded-full border border-gold/40">
          <span className="text-gold text-sm font-semibold tracking-wide">✦ Ready to Begin? ✦</span>
        </div>
        <img src={site.headerLogo} alt="" className="h-16 sm:h-20 w-auto object-contain mx-auto brightness-0 invert opacity-90" aria-hidden />
        <p className="mt-6 text-3xl sm:text-4xl font-bold leading-tight">{line1}</p>
        <a
          href="#contact"
          className="group mt-10 inline-flex items-center px-10 py-5 bg-gold text-main font-bold text-lg rounded-xl hover:bg-gold/90 hover:scale-105 transition-all shadow-2xl hover:shadow-3xl"
        >
          {cta}
          <svg className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 text-on-dark/70">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Licensed Professionals</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Personalized Care</span>
          </div>
        </div>
      </div>
    </section>
  )
}
