import '../styles/ledger.css'

export default function Ledger() {
  return (
    <div className="ledger">
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="wrap bar">
          <a className="wordmark" href="./">Acme AI</a>
          <nav aria-label="Primary">
            <ul className="nav-list">
              <li><a href="#how">How it works</a></li>
              <li><a href="#proof">Customers</a></li>
              <li><a href="#faq">Questions</a></li>
            </ul>
          </nav>
          <a className="button button-small" href="#contact">Book a demo</a>
        </div>
      </header>

      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <p className="eyebrow">Issue No. 01 · For operations teams</p>
          <h1 id="hero-title">Your procedures, read once and run every time.</h1>
          <p className="lede">Acme AI turns the manuals, runbooks and checklists your team already keeps into steps it can carry out in your existing tools, with a record of every action.</p>
          <div className="hero-actions" id="start">
            <a className="button" href="#contact">Book a demo</a>
            <a className="text-link" href="#how">See how it works</a>
          </div>
        </section>

        <section className="wrap columns" aria-label="Key facts">
          <dl className="facts">
            <div><dt>Setup</dt><dd>Placeholder: under one afternoon</dd></div>
            <div><dt>Audit trail</dt><dd>Placeholder: every step logged</dd></div>
            <div><dt>Approvals</dt><dd>Placeholder: you set the limits</dd></div>
          </dl>
        </section>

        <section id="how" className="wrap section" aria-labelledby="how-title">
          <header className="section-head">
            <p className="eyebrow">How it works</p>
            <h2 id="how-title">Three steps, no rewrite of your stack.</h2>
          </header>
          <ol className="steps">
            <li className="card">
              <span className="step-no" aria-hidden="true">1</span>
              <h3>Point it at your documents</h3>
              <p>Connect a shared drive or wiki. Acme AI indexes procedures and flags anything that contradicts another page.</p>
            </li>
            <li className="card">
              <span className="step-no" aria-hidden="true">2</span>
              <h3>Set what it may do</h3>
              <p>Choose which steps run alone and which wait for a person to approve. Change either at any time.</p>
            </li>
            <li className="card">
              <span className="step-no" aria-hidden="true">3</span>
              <h3>Review the log</h3>
              <p>Each action records its source page, inputs and result, so an auditor can follow the chain without asking anyone.</p>
            </li>
          </ol>
        </section>

        <section id="proof" className="wrap section" aria-labelledby="proof-title">
          <p className="eyebrow" id="proof-title">From the field</p>
          <figure className="quote">
            <blockquote>
              <p>“Placeholder quote. Replace with a verified customer statement before launch.”</p>
            </blockquote>
            <figcaption>Name Surname, Title, Company (placeholder)</figcaption>
          </figure>
        </section>

        <section id="faq" className="wrap section" aria-labelledby="faq-title">
          <header className="section-head">
            <p className="eyebrow">Questions</p>
            <h2 id="faq-title">Answers before you ask.</h2>
          </header>
          <div className="faq">
            <details>
              <summary>Does it change our documents?</summary>
              <p>No. Acme AI reads them. Edits go through the same review your team already uses.</p>
            </details>
            <details>
              <summary>Where is our data stored?</summary>
              <p>Placeholder: region and retention details to be confirmed by Acme AI before publishing.</p>
            </details>
          </div>
        </section>

        <section id="contact" className="wrap section closing" aria-labelledby="contact-title">
          <h2 id="contact-title">Bring one procedure. We’ll run it live.</h2>
          <form className="signup" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email">Work email</label>
            <div className="field-row">
              <input id="email" name="email" type="email" autoComplete="email" placeholder="name@company.com" required aria-describedby="email-hint" />
              <button type="submit" className="button">Request a demo</button>
            </div>
            <p className="hint" id="email-hint">We reply within one working day. Form submission is not connected in this preview.</p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap foot">
          <p>© Acme AI · Placeholder company details</p>
          <p><a href="#">Privacy</a> · <a href="#">Terms</a></p>
        </div>
      </footer>
    </div>
  )
}
