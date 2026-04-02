import { useMemo, useState } from 'react';
import eventsData from '@/data/events.json';
import type { EventItem } from '@/types/event';
import FilterBar from '@/components/FilterBar';
import MapView from '@/components/MapView';
import EventList from '@/components/EventList';
import MainLayout from '@/layouts/MainLayout';

export default function Index() {
  const events = eventsData as EventItem[];

  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [hoveredEvent, setHoveredEvent] = useState<EventItem | null>(null);
  const [category, setCategory] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesCategory =
        category === 'all' || event.category === category;

      const query = search.toLowerCase().trim();

      const matchesSearch =
        query === '' ||
        event.title.toLowerCase().includes(query) ||
        event.country.toLowerCase().includes(query) ||
        event.address.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [events, category, search]);

  return (
    <MainLayout>
      <MapView
        events={filteredEvents}
        selectedEvent={selectedEvent}
        onSelect={setSelectedEvent}
      />

      <div className="p-6">
        <FilterBar
          category={category}
          onCategoryChange={setCategory}
          search={search}
          onSearchChange={setSearch}
        />

        <div className="mt-6">
          <EventList
            events={filteredEvents}
            selectedEvent={selectedEvent}
            onSelect={setSelectedEvent}
            onHover={setHoveredEvent}
          />
        </div>
      </div>
    </MainLayout>
  );
}