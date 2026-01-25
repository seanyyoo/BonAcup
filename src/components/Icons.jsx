/** Shared SVG icons for Yelp, Email, Phone. */

/** Yelp logo (based on Simple Icons, MIT). Use with a link to Yelp. */
export function YelpIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 0-.12-1.345l-1.018-1.018a1.073 1.073 0 0 0-1.342-.12L9.697 9.382a.975.975 0 0 1-1.212-.152 1.019 1.019 0 0 1-.155-1.263l2.905-4.307c.564-.83-.215-1.907-1.175-1.632L3.829 7.736a1.023 1.023 0 0 0-.64 1.357l1.566 3.357a.97.97 0 0 1-.417 1.286 1.02 1.02 0 0 1-1.312-.4L2.16 9.425a1.024 1.024 0 0 0-1.356-.641L.414 9.264a1.023 1.023 0 0 0-.64 1.357l2.232 4.788a2.99 2.99 0 0 0 2.572 1.734h12.422a1.022 1.022 0 0 0 1.02-.946l.52-5.606z" />
    </svg>
  )
}

export function EmailIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

export function PhoneIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}
