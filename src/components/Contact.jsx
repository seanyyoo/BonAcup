import { site } from '../config'
import { useLang } from '../context/LangContext'
import { YelpIcon, EmailIcon, PhoneIcon } from './Icons'

// 2120 W 8th St, LA 90057 — bbox and marker so pin shows at exact location
const MAP_EMBED =
  'https://www.openstreetmap.org/export/embed.html?bbox=-118.290%2C34.049%2C-118.278%2C34.057&layer=mapnik&marker=34.053%2C-118.284'
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.fullAddress)}`

export function Contact() {
  const { t } = useLang()
  const hours = t('hours') || []
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-white to-ivory border-t border-main/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Get In Touch</span>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mt-2 w-32 mx-auto"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-main">{t('contact.title')}</h2>
          <p className="mt-4 text-ink-muted text-lg max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="space-y-12">
          {/* Info grid - clean minimal design */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Address - no card, just content with icon */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold to-gold/80 rounded-full flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-main text-lg mb-2">{t('contact.addressLabel')}</h3>
                <p className="text-ink-muted leading-relaxed mb-3">
                  {site.address.line1}<br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-main font-semibold text-sm hover:text-gold transition-colors group"
                >
                  {t('contact.getDirections')}
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Hours - no card, just content with icon */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold to-gold/80 rounded-full flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-main text-lg mb-2">{t('contact.hoursLabel')}</h3>
                <ul className="space-y-2">
                  {hours.map((h, i) => (
                    <li key={i} className="flex justify-between text-ink-muted">
                      <span className="font-medium">{h.days}</span>
                      <span className="text-ink">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Map with elegant frame */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-br from-main/10 to-gold/10 rounded-2xl blur-lg" aria-hidden />
            <div className="relative rounded-2xl overflow-hidden border border-gold/30 shadow-xl">
              <iframe
                title={`Map: ${site.fullAddress}`}
                src={MAP_EMBED}
                className="w-full h-96"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="px-6 py-4 bg-white/95 backdrop-blur-sm border-t border-gold/20 flex justify-between items-center">
                <span className="text-ink-muted text-sm font-medium">{t('contact.mapZoom')}</span>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-main font-semibold text-sm hover:text-gold transition-colors group"
                >
                  {t('contact.openInGoogle')}
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact methods - clean icon row */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-main">{t('contact.reachOut')}</h3>
            </div>
            <div className="flex justify-center gap-8 sm:gap-12">
              <a
                href={site.yelpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3"
                aria-label={t('aria.yelp')}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold/80 rounded-2xl flex items-center justify-center text-main shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
                  <YelpIcon className="w-8 h-8" />
                </div>
                <span className="text-ink font-semibold text-sm group-hover:text-main transition-colors">Yelp</span>
              </a>
              <a
                href={`mailto:${site.email}`}
                onClick={() => {
                  setTimeout(() => {
                    if (document.hasFocus()) {
                      if (confirm(`Email us at:\n${site.email}\n\nClick OK to copy to clipboard.`)) {
                        navigator.clipboard.writeText(site.email).then(() => {
                          alert('Email address copied to clipboard!');
                        }).catch(() => {
                          alert(`Email: ${site.email}`);
                        });
                      }
                    }
                  }, 100);
                }}
                className="group flex flex-col items-center gap-3"
                aria-label={`${t('aria.email')}: ${site.email}`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold/80 rounded-2xl flex items-center justify-center text-main shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
                  <EmailIcon className="w-8 h-8" />
                </div>
                <span className="text-ink font-semibold text-sm group-hover:text-main transition-colors">Email</span>
              </a>
              <a
                href={`tel:${site.phoneTel}`}
                className="group flex flex-col items-center gap-3"
                aria-label={`${t('aria.call')}: ${site.phone}`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold/80 rounded-2xl flex items-center justify-center text-main shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
                  <PhoneIcon className="w-8 h-8" />
                </div>
                <span className="text-ink font-semibold text-sm group-hover:text-main transition-colors">Phone</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
