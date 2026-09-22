/**
 * Central site configuration — the single source of truth for identity,
 * contact, and SEO. Change it once here; it flows everywhere.
 */
export const SITE = {
  name: 'Alex Javier Rivas Martínez',
  shortName: 'Alex Rivas',
  title: 'Lead Mobile Engineer',
  tagline:
    'I craft innovative, secure, high-quality native apps for Android & iOS — and ship my own.',
  description:
    'Lead Mobile Engineer with 9+ years of experience building native Android & iOS apps. Expert in Kotlin, Swift, Jetpack Compose, SwiftUI, Kotlin Multiplatform, and mobile security.',
  url: 'https://xela-dev-mobile.com',
  locale: 'en_US',
  email: 'alex@xela-dev-mobile.com',
  location: 'Málaga, Spain',
  currentRoles: [
    { title: 'Lead Mobile Engineer', company: 'MindGuard Group' },
    { title: 'Senior Android Engineer', company: 'Betsson Group' },
  ],
  yearsExperience: '9+',
  ogImage: '/og-image.png',
  knowsAbout: [
    'Android Development',
    'iOS Development',
    'Kotlin',
    'Swift',
    'Jetpack Compose',
    'SwiftUI',
    'Kotlin Multiplatform',
    'Mobile Security',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/alexminator1999',
    github: 'https://github.com/Alexminator99',
  },
} as const;

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const;
