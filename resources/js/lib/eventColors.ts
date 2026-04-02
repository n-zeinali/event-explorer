const eventColors = [
  '#ef4444',
  '#14b8a6',
  '#f59e0b',
  '#ec4899',
  '#eab308',
  '#3b82f6',
  '#84cc16',
  '#a855f7',
];

export function getEventColor(index: number) {
  return eventColors[index % eventColors.length];
}