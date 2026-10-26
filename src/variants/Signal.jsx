import '../styles/signal.css'

export default function Signal() {
  return (
    <div className="signal">
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="wrap bar">
          <a className="wordmark" href="./"><span className="mark" aria-hidden="true"></span>Acme AI</a>
          <nav aria-label="Primary">
            <ul className="nav-list">
              <li><a href="#how">Method</a></li>
              <li><a href="#log">Audit log</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </nav>
          <a className="button button-small" href="#contact">Request access</a>
        </div>
      </header>

      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="tag">[ops] automation for procedure-driven teams</p>
            <h1 id="hero-title">Procedures in. Verified actions out.</h1>
            <p className="lede">Acme AI reads your runbooks and executes their steps across your tools. Each action is logged with its source, inputs and result.</p>
            <div className="hero-actions">
              <a className="button" href="#contact">Request access</a>
              <a className="ghost" href="#how">View the method</a>
            </div>
          </div>

          <div className="console">
            <p><span className="ok">OK</span> runbook/invoice-review.md · step 3 of 7</p>
            <p><span className="dim">  source</span>  wiki/finance/approvals#L42</p>
            <p><span className="dim">  action</span>  erp.post_invoice(id=INV-0000)</p>
            <p><span className="warn">WAIT</span> approval requested · owner: ops-lead</p>
            <p><span className="dim">  placeholder data for illustration</span></p>
          </div>
        </section>

        <section id="how" className="wrap section" aria-labelledby="how-title">
          <header className="section-head">
            <p className="tag">01 — method</p>
            <h2 id="how-title">Read, plan, act, record.</h2>
          </header>
          <ol className="grid-3">
            <li className="cell">
              <p className="cell-id">R</p>
              <h3>Read</h3>
              <p>Index the procedures you already keep. Contradictions between pages are flagged before a run starts.</p>
            </li>
            <li className="cell">
              <p className="cell-id">P</p>
              <h3>Plan</h3>
              <p>Each procedure becomes a list of steps with the permissions each one needs. You review the plan once.</p>
            </li>
            <li className="cell">
              <p className="cell-id">A</p>
              <h3>Act</h3>
              <p>Steps run in your tools with the limits you set. Anything outside them waits for a named approver.</p>
            </li>
          </ol>
        </section>

        <section id="log" className="wrap section split" aria-labelledby="log-title">
          <div>
            <p className="tag">02 — audit</p>
            <h2 id="log-title">Every step leaves a trace.</h2>
            <p className="muted">Logs are exportable and searchable by procedure, person or system. Placeholder: retention period to be confirmed.</p>
          </div>
          <figure className="quote">
            <blockquote><p>“Placeholder customer quote. Replace with a verified statement before launch.”</p></blockquote>
            <figcaption>Name Surname, Title, Company (placeholder)</figcaption>
          </figure>
        </section>

        <section id="faq" className="wrap section" aria-labelledby="faq-title">
          <header className="section-head">
            <p className="tag">03 — questions</p>
            <h2 id="faq-title">FAQ</h2>
          </header>
          <div className="faq">
            <details>
              <summary>Can it act without approval?</summary>
              <p>Only for steps you mark as automatic. Everything else waits for a named approver.</p>
            </details>
            <details>
              <summary>Does it modify source documents?</summary>
              <p>No. It reads them. Proposed edits go through your normal review.</p>
            </details>
          </div>
        </section>

        <section id="contact" className="wrap section closing" aria-labelledby="contact-title">
          <h2 id="contact-title">Request access.</h2>
          <form className="signup" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email">Work email</label>
            <div className="field-row">
              <input id="email" name="email" type="email" autoComplete="email" placeholder="name@company.com" required aria-describedby="email-hint" />
              <button type="submit" className="button">Request access</button>
            </div>
            <p className="hint" id="email-hint">Form submission is not connected in this preview.</p>
          </form>
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
