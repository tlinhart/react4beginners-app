const dayFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

export function formatDay(day: Date): string {
  return dayFormatter.format(day)
}