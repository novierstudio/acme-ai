import Picker from './Picker.jsx'
import Ledger from './variants/Ledger.jsx'
import Signal from './variants/Signal.jsx'
import Warm from './variants/Warm.jsx'

// Variants are selected by ?v=a|b|c so each one has a shareable URL.
// Plain query strings keep in-page anchors (#how, #faq) working without a router.
const variants = { a: Ledger, b: Signal, c: Warm }

export default function App() {
  const key = new URLSearchParams(window.location.search).get('v')
  const Variant = variants[key]
  return Variant ? <Variant /> : <Picker />
}
