export function cn(...inputs) {
  return inputs
    .flatMap((item) => {
      if (!item) return []
      if (typeof item === 'string') return [item]
      if (Array.isArray(item)) return item.filter(Boolean)
      if (typeof item === 'object') {
        return Object.entries(item)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key)
      }
      return []
    })
    .join(' ')
}

export function sectionClassName() {
  return 'mx-auto w-full max-w-[1440px] px-5 sm:px-6 lg:px-10 xl:px-16'
}
