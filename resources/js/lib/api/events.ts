export async function fetchEvents() {
  const response = await fetch('/api/events');
  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Failed to load events.');
  }

  return result.data;
}