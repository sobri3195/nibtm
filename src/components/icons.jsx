const iconProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const make = (path) => function Icon() { return <svg {...iconProps}>{path}</svg> }

export const Dna = make(<><path d="M4 4c6 0 10 16 16 16" /><path d="M20 4c-6 0-10 16-16 16" /><path d="M8 8h8" /><path d="M8 16h8" /></>)
export const Microscope = make(<><path d="M6 18h12" /><path d="M8 18a6 6 0 0 0 6-6" /><path d="M10 3l4 4" /><path d="M14 7l-2 2" /><path d="M10 11l2 2" /></>)
export const Brain = make(<><path d="M9 6a3 3 0 1 1 3 3v9" /><path d="M15 6a3 3 0 1 0-3 3" /><path d="M9 18c0 2 6 2 6 0" /></>)
export const Database = make(<><ellipse cx="12" cy="5" rx="7" ry="3" /><path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" /><path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></>)
export const ArrowRight = make(<path d="M5 12h14M13 5l7 7-7 7" />)
export const Download = make(<><path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M5 21h14" /></>)
export const FileText = make(<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></>)
export const FlaskConical = make(<><path d="M9 3h6" /><path d="M10 3v5l-5 9a3 3 0 0 0 3 4h8a3 3 0 0 0 3-4l-5-9V3" /></>)
export const Star = make(<path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />)
export const Linkedin = make(<><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 11v5" /><path d="M8 8h.01" /><path d="M12 16v-3a2 2 0 1 1 4 0v3" /></>)
export const Github = make(<><path d="M9 19c-5 1.5-5-2.5-7-3" /><path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-6 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></>)
export const Sparkles = make(<><path d="M12 3l1.5 3.5L17 8l-3.5 1.5L12 13l-1.5-3.5L7 8l3.5-1.5L12 3z" /><path d="M19 14l.8 1.7L21.5 17l-1.7.8L19 19.5l-.8-1.7L16.5 17l1.7-.8L19 14z" /></>)
export const CircleDot = make(<><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="2" /></>)
export const TrendUp = make(<path d="M3 17l6-6 4 4 8-8" />)
export const BarChart = make(<><path d="M4 20V10" /><path d="M12 20V4" /><path d="M20 20v-7" /></>)
