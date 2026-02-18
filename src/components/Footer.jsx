import { site } from '../config'
import { useLang } from '../context/LangContext'
import { YelpIcon, EmailIcon, PhoneIcon } from './Icons'

export function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()
  const copyright = (t('footer.copyright') || '')
    .replace('{year}', String(year))
    .replace('{name}', t('brand.name'))
  return (
    <footer className="bg-main text-on-dark py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="text-left">
            <img src={site.headerLogo} alt="" className="h-14 sm:h-16 w-auto object-contain object-left brightness-0 invert opacity-90" aria-hidden />
            <p className="text-on-dark/80 text-sm mt-2">{site.fullAddress}</p>
            <p className="text-on-dark/80 text-sm">{site.phone}</p>
          </div>
          <div className="flex gap-4">
            <a
              href={site.yelpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-on-dark/10 text-on-dark hover:bg-on-dark/20 transition-colors"
              aria-label={t('aria.yelp')}
            >
              <YelpIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-on-dark/10 text-on-dark hover:bg-on-dark/20 transition-colors"
              aria-label={`${t('aria.email')} ${site.email}`}
            >
              <EmailIcon className="w-5 h-5" />
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-on-dark/10 text-on-dark hover:bg-on-dark/20 transition-colors"
              aria-label={`${t('aria.call')} ${site.phone}`}
            >
              <PhoneIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <p className="mt-8 pt-8 border-t border-on-dark/20 text-on-dark/70 text-sm text-center sm:text-left">
          {copyright}
        </p>
      </div>
    </footer>
  )
}
