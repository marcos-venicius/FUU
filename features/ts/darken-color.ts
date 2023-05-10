export function darkenColor(hex: string) {
  hex = hex.replace('#', '')

  const r = Math.max(parseInt(hex.slice(0, 2), 16) - 20, 0).toString(16)
  const g = Math.max(parseInt(hex.slice(2, 4), 16) - 20, 0).toString(16)
  const b = Math.max(parseInt(hex.slice(4, 6), 16) - 20, 0).toString(16)

  return '#' + r.padStart(2, '0') + g.padStart(2, '0') + b.padStart(2, '0')
}
