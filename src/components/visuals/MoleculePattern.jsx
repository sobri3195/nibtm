export default function MoleculePattern({ className = '' }) {
  return (
    <svg viewBox="0 0 240 120" className={className} aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.45">
        <circle cx="20" cy="30" r="8" /><circle cx="70" cy="24" r="6" /><circle cx="118" cy="48" r="7" />
        <circle cx="164" cy="32" r="6" /><circle cx="214" cy="62" r="8" /><circle cx="90" cy="92" r="9" />
        <path d="M28 30H64M76 27L112 45M125 45L158 34M170 35L206 58M112 54L96 84" />
      </g>
    </svg>
  )
}
