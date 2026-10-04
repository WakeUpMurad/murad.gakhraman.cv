import { useEffect, useState, type MouseEvent } from 'react'
import { emailHref, profile, type Locale, type WorkCase } from './data/profile'
import portrait from './images/mg.webp'
import './App.css'

export const LANGUAGE_STORAGE_KEY = 'murad-portfolio-language'

export function getResumeUrl(locale: Locale, baseUrl = import.meta.env.BASE_URL) {
  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  return `${base}resume/murad-gakhramanov-${locale}.pdf`
}

function getInitialLocale(): Locale {
  try {
    return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === 'ru' ? 'ru' : 'en'
  } catch {
    return 'en'
  }
}

function LinkArrow() {
  return <span aria-hidden="true" className="link-arrow">↗</span>
}

function closeMobileMenu(event: MouseEvent<HTMLAnchorElement>) {
  const menu = event.currentTarget.closest('details')
  menu?.removeAttribute('open')
  menu?.querySelector('summary')?.focus()
}

function WorkCard({ item, index, contributionLabel }: { item: WorkCase; index: number; contributionLabel: string }) {
  return (
    <article
      className={`work-card${item.featured ? ' work-card-featured' : ''}`}
      aria-labelledby={`case-title-${item.id}`}
      id={`case-${item.id}`}
    >
      <span className="case-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      <div className="case-content">
        <p className="case-category">{item.category}</p>
        <h3 id={`case-title-${item.id}`}>{item.title}</h3>
        <p className="case-summary">{item.summary}</p>
        <ul className="tags" aria-label={item.stack.join(', ')}>
          {item.stack.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
        <details className="contribution">
          <summary>
            {contributionLabel}
            <span className="details-symbol" aria-hidden="true">+</span>
          </summary>
          <ul className="contribution-list">
            {item.contributions.map((text) => <li key={text}>{text}</li>)}
          </ul>
        </details>
      </div>
      <div className="case-outcome">
        {item.featured && <div className="insurance-emblem" aria-hidden="true"><svg viewBox="0 0 120 140" fill="none"><path d="M60 8 106 26v42c0 31-24 52-46 64C38 120 14 99 14 68V26L60 8Z" /><path d="m38 69 15 15 31-34" /></svg></div>}
        <p className="outcome-value">{item.outcome}</p>
        <p className="outcome-label">{item.outcomeLabel}</p>
      </div>
    </article>
  )
}

export default function App() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)
  const copy = profile[locale]
  const resumeUrl = getResumeUrl(locale)

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = copy.metadata.title
    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!description) {
      description = document.createElement('meta')
      description.name = 'description'
      document.head.append(description)
    }
    description.content = copy.metadata.description

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, locale)
    } catch {
      // The language switch remains available when browser storage is blocked.
    }
  }, [locale, copy.metadata])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined' || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' })
    for (const element of elements) {
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add('will-reveal')
        observer.observe(element)
      }
    }
    return () => {
      observer.disconnect()
      for (const element of elements) element.classList.remove('will-reveal', 'is-visible')
    }
  }, [locale])

  return (
    <>
      <a className="skip-link" href="#main">{copy.ui.skip}</a>
      <header className="site-header" id="top">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label={`${copy.hero.firstName} ${copy.hero.lastName}`}>
            <span className="monogram" aria-hidden="true">MG<span>.</span></span>
            <span className="brand-description">{copy.ui.brand}</span>
          </a>
          <nav className="main-nav" aria-label={copy.ui.navigation}>
            <a href="#work">{copy.ui.work}</a>
            <a href="#experience">{copy.ui.experience}</a>
            <a href="#stack">{copy.ui.stack}</a>
          </nav>
          <div className="header-actions">
            <div className="language-switch" role="group" aria-label={copy.ui.language}>
              <button type="button" lang="en" aria-label="English" aria-pressed={locale === 'en'} onClick={() => setLocale('en')}>EN</button>
              <button type="button" lang="ru" aria-label="Русский" aria-pressed={locale === 'ru'} onClick={() => setLocale('ru')}>RU</button>
            </div>
            <a className="header-contact" href="#contact">{copy.ui.contact}<LinkArrow /></a>
            <details className="mobile-nav">
              <summary aria-label={copy.ui.navigation}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16M4 16h16" /></svg></summary>
              <nav aria-label={copy.ui.navigation}>
                <a href="#work" onClick={closeMobileMenu}>{copy.ui.work}</a>
                <a href="#experience" onClick={closeMobileMenu}>{copy.ui.experience}</a>
                <a href="#stack" onClick={closeMobileMenu}>{copy.ui.stack}</a>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero-stage" aria-labelledby="hero-title">
          <div className="hero-light" aria-hidden="true" />
          <div className="hero-backdrop-word" aria-hidden="true">FRONTEND</div>
          <div className="container hero">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">{copy.hero.eyebrow}</p>
            <h1 id="hero-title"><span>{copy.hero.firstName}</span>{' '}<span>{copy.hero.lastName}<span className="name-period" aria-hidden="true">.</span></span></h1>
            <p className="hero-promise">{copy.hero.promise}</p>
            <p className="hero-intro">{copy.hero.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={emailHref}>{copy.ui.talk}<LinkArrow /></a>
              <a className="button button-secondary" href={resumeUrl} download>{copy.ui.download}<span aria-hidden="true">↓</span></a>
            </div>
            <p className="availability"><span className="status-dot" aria-hidden="true" />{copy.hero.availability}</p>
          </div>
          <figure className="portrait-card">
            <div className="portrait-frame"><img src={portrait} alt={copy.hero.portraitAlt} width="640" height="951" loading="eager" decoding="async" /></div>
            <figcaption>
              <p className="portrait-location"><span aria-hidden="true">↳</span>{copy.hero.location}</p>
              <div className="current-focus">
                <p className="current-label">{copy.hero.currentLabel}</p>
                <p className="current-company">{copy.hero.currentCompany}</p>
                <p className="current-role">{copy.hero.currentRole}</p>
              </div>
            </figcaption>
          </figure>
          <a className="scroll-cue" href="#work" aria-label={copy.ui.work}><span aria-hidden="true">↓</span><span>{copy.ui.work}</span></a>
          </div>
        </section>

        <div className="container">
          <dl className="metrics" data-reveal>
            {copy.stats.map((stat) => (
              <div className="metric" key={stat.label}>
                <dt>{stat.label}</dt>
                <dd className="metric-value">{stat.value}</dd>
                <dd className="metric-detail">{stat.detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        <section className="container section work-section" aria-labelledby="work-title">
          <div className="section-heading" id="work" data-reveal>
            <div><p className="eyebrow">{copy.work.eyebrow}</p><h2 id="work-title">{copy.work.title}</h2></div>
            <p className="section-intro">{copy.work.intro}</p>
          </div>
          <ol className="work-list">
            {copy.work.cases.map((item, index) => (
              <li key={item.id} data-reveal><WorkCard item={item} index={index} contributionLabel={copy.ui.contribution} /></li>
            ))}
          </ol>
        </section>

        <section className="container section" aria-labelledby="experience-title">
          <div className="section-heading" id="experience" data-reveal>
            <div><p className="eyebrow">{copy.experience.eyebrow}</p><h2 id="experience-title">{copy.experience.title}</h2></div>
            <p className="section-intro">{copy.experience.intro}</p>
          </div>
          <div className="experience-list">
            {copy.experience.jobs.map((job) => (
              <article className="job" key={`${job.company}-${job.period}`} data-reveal>
                <div className="job-meta"><h3>{job.company}</h3><p>{job.period}</p></div>
                <div className="job-content">
                  <p className="job-role">{job.role}</p>
                  <p className="job-summary">{job.summary}</p>
                  {job.detailsLabel ? (
                    <details className="contribution earlier-roles">
                      <summary>{job.detailsLabel}<span className="details-symbol" aria-hidden="true">+</span></summary>
                      <ul className="contribution-list">{job.contributions.map((text) => <li key={text}>{text}</li>)}</ul>
                    </details>
                  ) : (
                    <ul className="contribution-list job-contributions">{job.contributions.map((text) => <li key={text}>{text}</li>)}</ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="container section stack-section" aria-labelledby="stack-title">
          <div className="section-heading" id="stack" data-reveal>
            <div><p className="eyebrow">{copy.stack.eyebrow}</p><h2 id="stack-title">{copy.stack.title}</h2></div>
            <p className="section-intro">{copy.stack.intro}</p>
          </div>
          <div className="skill-groups">
            {copy.stack.groups.map((group) => (
              <article className="skill-group" key={group.title} data-reveal>
                <h3>{group.title}</h3>
                <ul className="skill-list">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                <p>{group.description}</p>
              </article>
            ))}
          </div>
          <div className="supporting-content" data-reveal>
            <section className="education" aria-labelledby="education-title">
              <h2 id="education-title">{copy.education.title}</h2>
              {copy.education.items.map((item) => (
                <div className="education-item" key={item.institution}>
                  <h3>{item.institution}</h3>
                  <p>{item.qualification}</p>
                  {item.href && <a className="text-link" href={item.href} target="_blank" rel="noopener noreferrer">{item.linkLabel}<LinkArrow /></a>}
                </div>
              ))}
            </section>
            <details className="learning-projects">
              <summary>{copy.learning.title}<span className="details-symbol" aria-hidden="true">+</span></summary>
              <p className="learning-intro">{copy.learning.intro}</p>
              <ul className="learning-list">
                {copy.learning.projects.map((project) => (
                  <li key={project.title}>
                    <div><h3>{project.title}</h3><p>{project.stack}</p></div>
                    <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} — ${project.linkLabel}`}>{project.linkLabel}<LinkArrow /></a>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </section>

        <section className="contact-section" aria-labelledby="contact-title">
          <div className="container contact-card" id="contact" data-reveal>
            <div className="contact-copy">
              <p className="eyebrow">{copy.contact.eyebrow}</p>
              <h2 id="contact-title">{copy.contact.title}</h2>
              <p className="contact-body">{copy.contact.body}</p>
              <p className="contact-availability"><span className="status-dot" aria-hidden="true" />{copy.contact.availability}</p>
            </div>
            <ul className="contact-links">
              {copy.contact.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} {...(link.href.startsWith('https://') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    <span className="contact-link-content"><span className="contact-label">{link.label}</span><span className="contact-value">{link.value}</span></span>
                    <LinkArrow />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="container site-footer">
        <p>© {new Date().getFullYear()} {copy.footer}</p>
        <div><a href={resumeUrl} download>{copy.ui.resume}</a><a href="#top">{copy.ui.backToTop}<span aria-hidden="true">↑</span></a></div>
      </footer>
    </>
  )
}
