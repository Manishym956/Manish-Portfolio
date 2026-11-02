import { useState, type FormEvent } from 'react'
import { experience, profile } from '../data/profile'

// FormSubmit forwards submissions to the inbox; no server or API key needed.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`

export default function FinalSpread() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, _subject: `Portfolio: message from ${data.name}`, _template: 'table' }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || json.success === 'false' || json.success === false) throw new Error(json.message)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="final-spread" className="final-spread chapter">
      <header className="chapter__header">
        <span className="chapter__num">08</span>
        <h2 className="chapter__title">FINAL SPREAD: RECRUIT MANISH TO YOUR ARMADA</h2>
        <span className="chapter__jp">最終章</span>
      </header>

      <div className="final-spread__grid">
        <div className="final-spread__recruit panel">
          <h3>Submit to Crew</h3>
          <form className="recruit-form" onSubmit={onSubmit}>
            <label>
              Name
              <input type="text" name="name" placeholder="Captain's name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@ship.com" required />
            </label>
            <label>
              Message
              <textarea name="message" rows={4} placeholder="Describe your mission..." required />
            </label>
            {/* honeypot: bots fill it, FormSubmit drops those */}
            <input type="text" name="_honey" className="recruit-form__honey" tabIndex={-1} autoComplete="off" />
            <button type="submit" className="btn-manga" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Submit to Armada'}
            </button>
            {status === 'sent' && <p className="recruit-form__note">Message received! I'll reply soon.</p>}
            {status === 'error' && (
              <p className="recruit-form__note">
                Couldn't send. Email me directly at <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>
            )}
          </form>
        </div>

        <div className="final-spread__shipping">
          <article className="panel shipping-box">
            <h3>Shipping Info</h3>
            <ul className="shipping-list">
              <li>
                <span>GitHub</span>
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
                  @Manishym956
                </a>
              </li>
              <li>
                <span>LinkedIn</span>
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                  manish-y-m
                </a>
              </li>
              <li>
                <span>Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <span>LeetCode</span>
                <a href={profile.links.leetcode} target="_blank" rel="noopener noreferrer">
                  Manishym956
                </a>
              </li>
            </ul>

            <div className="shipping-experience">
              <p className="panel__title">Recent Crews</p>
              {experience.map((job) => (
                <p key={job.company}>
                  <strong>{job.role}</strong> — {job.company} ({job.period})
                </p>
              ))}
            </div>
          </article>

          <div className="final-spread__dramatic halftone-dark">
            <p className="final-spread__onepiece">THE ONE PIECE</p>
            <p className="final-spread__real">IS REAL!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
