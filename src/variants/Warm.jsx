import '../styles/warm.css'

export default function Warm() {
  return (
    <div className="warm">
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="wrap bar">
          <a className="wordmark" href="./">Acme AI</a>
          <nav aria-label="Primary">
            <ul className="nav-list">
              <li><a href="#how">How it works</a></li>
              <li><a href="#stories">Stories</a></li>
              <li><a href="#faq">Help</a></li>
            </ul>
          </nav>
          <a className="button button-small" href="#contact">Talk to us</a>
        </div>
      </header>

      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-text">
            <p className="pill">Now in preview</p>
            <h1 id="hero-title">Less busywork. Same people in charge.</h1>
            <p className="lede">Acme AI handles the repeat steps in your team's checklists and asks a person before anything important happens.</p>
            <div className="hero-actions">
              <a className="button" href="#contact">Talk to us</a>
              <a className="text-link" href="#how">How it works →</a>
            </div>
          </div>
          <div className="hero-card">
            <p className="small">Waiting for you</p>
            <p className="task-title">Send the monthly vendor reminder</p>
            <p className="small">Drafted from your checklist. Placeholder example.</p>
            <div className="task-actions">
              <span className="button button-static">Approve</span>
              <span className="chip">Edit first</span>
            </div>
          </div>
        </section>

        <section id="how" className="wrap section" aria-labelledby="how-title">
          <header className="section-head">
            <h2 id="how-title">Three quiet steps.</h2>
            <p className="lede">Nothing changes in the tools your team already uses.</p>
          </header>
          <ol className="steps">
            <li className="card">
              <h3>Share your checklists</h3>
              <p>Point Acme AI at the docs you already use. It learns the order of the steps and who signs off on each.</p>
            </li>
            <li className="card">
              <h3>Choose what runs alone</h3>
              <p>Routine reminders can go out on their own. Payments and changes to customers always wait for you.</p>
            </li>
            <li className="card">
              <h3>Check what happened</h3>
              <p>A short daily summary lists every step, what it touched and anything that needs you.</p>
            </li>
          </ol>
        </section>

        <section id="stories" className="wrap section" aria-labelledby="stories-title">
          <div className="story">
            <h2 id="stories-title">Placeholder story heading</h2>
            <blockquote>
              <p>“Placeholder customer quote. Replace with a verified statement before launch.”</p>
              <footer>Name Surname, Title, Company (placeholder)</footer>
            </blockquote>
          </div>
        </section>

        <section id="faq" className="wrap section" aria-labelledby="faq-title">
          <h2 id="faq-title">Good questions</h2>
          <div className="faq">
            <details>
              <summary>Will it send things without asking?</summary>
              <p>Only the steps you mark as routine. Anything that changes money or customers waits for you.</p>
            </details>
            <details>
              <summary>Can we undo a step?</summary>
              <p>Placeholder: undo rules depend on the connected tool and will be described per integration.</p>
            </details>
          </div>
        </section>

        <section id="contact" className="wrap section closing" aria-labelledby="contact-title">
          <div className="cta">
            <h2 id="contact-title">Talk to us about your checklists.</h2>
            <form className="signup" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email">Work email</label>
              <div className="field-row">
                <input id="email" name="email" type="email" autoComplete="email" placeholder="name@company.com" required aria-describedby="email-hint" />
                <button type="submit" className="button">Talk to us</button>
              </div>
              <p className="hint" id="email-hint">Form submission is not connected in this preview.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap foot">
          <p>Acme AI · Placeholder company details</p>
          <p><a href="#">Privacy</a> · <a href="#">Terms</a></p>
        </div>
      </footer>
    </div>
  )
}
