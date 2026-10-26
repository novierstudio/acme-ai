import './picker.css'

const options = [
  {
    key: 'a',
    name: 'A · Ledger',
    body: 'Warm paper, serif headlines and one vermilion signal. Reads like a quiet printed document.',
  },
  {
    key: 'b',
    name: 'B · Signal',
    body: 'Dark console with monospace labels and a live-style log. Built for technical operations buyers.',
  },
  {
    key: 'c',
    name: 'C · Warm',
    body: 'Soft sand surfaces, rounded cards and a friendly approval example. Leads with less busywork.',
  },
]

export default function Picker() {
  return (
    <main className="picker">
      <div className="picker-wrap">
        <h1>Acme AI landing page variations</h1>
        <p className="picker-intro">
          Three directions for the same offer. Each page uses placeholder copy and quotes that must be replaced before launch.
        </p>
        <ul className="picker-list">
          {options.map((o) => (
            <li key={o.key}>
              <a className="picker-card" href={`?v=${o.key}`}>
                <h2>{o.name}</h2>
                <p>{o.body}</p>
                <span className="picker-go">Open variant {o.key.toUpperCase()} →</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
