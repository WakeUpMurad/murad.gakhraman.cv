import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import App, { getResumeUrl, LANGUAGE_STORAGE_KEY } from './App'

describe('recruiter portfolio', () => {
  it('opens in English and presents commercial work and confirmed leadership', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: /Murad Gakhramanov/ })).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('en')
    expect(screen.getByText('Hands-on frontend lead · Team of 4')).toBeInTheDocument()
    expect(screen.getByRole('article', { name: 'Insurance platform' })).toBeInTheDocument()
    expect(screen.getByRole('article', { name: 'Appointment scheduling' })).toBeInTheDocument()
    expect(screen.getByRole('article', { name: 'Finance & business CRM' })).toBeInTheDocument()
    expect(screen.getByText('AI-assisted development')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Download CV/ })).toHaveAttribute('href', getResumeUrl('en'))
  })

  it('switches the content, metadata and CV to Russian and remembers the choice', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Русский' }))

    expect(screen.getByRole('heading', { level: 1, name: /Мурад Гахраманов/ })).toBeInTheDocument()
    expect(screen.getByRole('article', { name: 'Страховки' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Русский' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'English' })).toHaveAttribute('aria-pressed', 'false')
    expect(document.documentElement.lang).toBe('ru')
    expect(document.title).toContain('Мурад Гахраманов')
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', expect.stringContaining('Баку'))
    expect(screen.getByRole('link', { name: /Скачать резюме/ })).toHaveAttribute('href', getResumeUrl('ru'))
    expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('ru')

    await user.click(screen.getByRole('button', { name: 'English' }))
    expect(document.documentElement.lang).toBe('en')
    expect(document.title).toContain('Murad Gakhramanov')
  })

  it('restores a saved language on a later visit', () => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, 'ru')
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: /Мурад Гахраманов/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Скачать резюме/ })).toHaveAttribute('href', getResumeUrl('ru'))
  })

  it('still works when the browser blocks access to language storage', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new DOMException('Storage blocked', 'SecurityError') })
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new DOMException('Storage blocked', 'SecurityError') })
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: /Murad Gakhramanov/ })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Русский' }))
    expect(screen.getByRole('heading', { level: 1, name: /Мурад Гахраманов/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Скачать резюме/ })).toHaveAttribute('href', getResumeUrl('ru'))
  })

  it('keeps every navigation anchor on the page and exposes direct contact links', () => {
    render(<App />)

    const links = screen.getAllByRole('link')
    for (const link of links.filter((item) => item.getAttribute('href')?.startsWith('#'))) {
      const target = link.getAttribute('href')!.slice(1)
      expect(document.getElementById(target)).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: /my_pad@mail.ru/ })).toHaveAttribute('href', 'mailto:my_pad@mail.ru')
    expect(screen.getByRole('link', { name: /@murad_savage/ })).toHaveAttribute('href', 'https://t.me/murad_savage')
    expect(screen.getByRole('link', { name: /Phone/ })).toHaveAttribute('href', 'tel:+79534215577')
    for (const link of links.filter((item) => item.getAttribute('target') === '_blank')) {
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
  })

  it('opens mobile navigation, follows valid anchors and returns focus when a section is selected', async () => {
    const user = userEvent.setup()
    render(<App />)
    const summary = screen.getByLabelText('Main navigation', { selector: 'summary' })
    const menu = summary.closest('details')!

    expect(menu).not.toHaveAttribute('open')
    await user.click(summary)
    expect(menu).toHaveAttribute('open')

    const links = within(menu).getAllByRole('link')
    expect(links).toHaveLength(3)
    for (const link of links) {
      expect(link).toBeVisible()
      const href = link.getAttribute('href')!
      expect(href).toMatch(/^#(work|experience|stack)$/)
      expect(document.getElementById(href.slice(1))).toBeInTheDocument()
    }

    await user.click(within(menu).getByRole('link', { name: 'Stack' }))
    expect(menu).not.toHaveAttribute('open')
    expect(summary).toHaveFocus()
    expect(within(menu).getByText('Stack')).not.toBeVisible()
  })

  it('lets a recruiter expand and collapse an insurance contribution without leaving the page', async () => {
    const user = userEvent.setup()
    render(<App />)
    const card = screen.getByRole('article', { name: 'Insurance platform' })
    const summary = within(card).getByText('My contribution')
    const details = summary.closest('details')!
    const implementation = within(card).getByText(/Implemented the frontend to corporate UI library standards/)

    expect(details).not.toHaveAttribute('open')
    expect(implementation).not.toBeVisible()
    await user.click(summary)
    expect(details).toHaveAttribute('open')
    expect(implementation).toBeVisible()
    await user.click(summary)
    expect(details).not.toHaveAttribute('open')
    expect(implementation).not.toBeVisible()
    expect(within(card).queryByRole('link')).not.toBeInTheDocument()
  })

  it('creates working PDF paths for root and GitHub Pages deployments in both languages', () => {
    expect(getResumeUrl('en', '/')).toBe('/resume/murad-gakhramanov-en.pdf')
    expect(getResumeUrl('ru', '/murad.gakhraman.cv/')).toBe('/murad.gakhraman.cv/resume/murad-gakhramanov-ru.pdf')
    expect(getResumeUrl('en', '/murad.gakhraman.cv')).toBe('/murad.gakhraman.cv/resume/murad-gakhramanov-en.pdf')
  })
})
