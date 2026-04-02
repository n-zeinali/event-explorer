import { useState } from 'react';
import eventsData from '@/data/events.json';
import type { EventItem } from '@/types/event';

export default function Index() {
  const events = eventsData as EventItem[];

  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [hoveredEvent, setHoveredEvent] = useState<EventItem | null>(null);
  const [category, setCategory] = useState<string>('all');

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-900">Air Race Events</h1>
    </div>
  );
}