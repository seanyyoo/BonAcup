import { site } from '../config'
import { useLang } from '../context/LangContext'
import { YelpIcon, EmailIcon, PhoneIcon } from './Icons'

const MAP_EMBED =
  'https://www.openstreetmap.org/export/embed.html?bbox=-118.294%2C34.055%2C-118.276%2C34.072&layer=mapnik'
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.fullAddress)}`

export function Contact() {
  const { t } = useLang()
  const hours = t('hours') || []
  return (
    <section id="contact" className="py-12 sm:py-16 bg-white border-t border-main/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-main text-center">{t('contact.title')}</h2>
        <p className="mt-4 text-ink-muted text-center max-w-xl mx-auto">
          {t('contact.subtitle')}
        </p>

        <div className="mt-10 grid lg:grid-cols-2 gap-10 lg:gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-ink">{t('contact.addressLabel')}</h3>
              <p className="mt-1 text-ink-muted">
                {site.address.line1}<br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </p>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center text-main font-medium hover:underline"
              >
                {t('contact.getDirections')}
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-ink">{t('contact.hoursLabel')}</h3>
              <ul className="mt-2 space-y-1 text-ink-muted">
                {hours.map((h, i) => (
                  <li key={i}>{h.days} {h.time}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-ink mb-3">{t('contact.reachOut')}</h3>
              <div className="flex gap-4">
                <a
                  href={site.yelpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-main text-on-dark hover:bg-main/90 transition-colors"
                  aria-label={t('aria.yelp')}
                  title="Yelp"
                >
                  <YelpIcon className="w-6 h-6" />
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-main text-on-dark hover:bg-main/90 transition-colors"
                  aria-label={`${t('aria.email')}: ${site.email}`}
                  title="Email"
                >
                  <EmailIcon className="w-6 h-6" />
                </a>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-main text-on-dark hover:bg-main/90 transition-colors"
                  aria-label={`${t('aria.call')}: ${site.phone}`}
                  title="Call"
                >
                  <PhoneIcon className="w-6 h-6" />
                </a>
              </div>
              <p className="mt-3 text-ink-light text-sm">
                {t('contact.reachOutHint')}{site.phone}
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-main/10 shadow-lg bg-white">
            <iframe
              title={`Map: ${site.fullAddress}`}
              src={MAP_EMBED}
              className="w-full h-80 sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="px-4 py-3 bg-white/80 border-t border-main/10 flex justify-between items-center">
              <span className="text-ink-muted text-sm">{t('contact.mapZoom')}</span>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-main font-medium text-sm hover:underline"
              >
                {t('contact.openInGoogle')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
