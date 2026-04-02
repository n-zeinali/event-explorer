import { useEffect, useMemo, useState } from 'react';
import type { EventItem } from '@/types/event';
import FilterBar from '@/components/FilterBar';
import MapView from '@/components/MapView';
import EventList from '@/components/EventList';
import MainLayout from '@/layouts/MainLayout';
import { fetchEvents } from '@/lib/api/events';

export default function Index() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [, setHoveredEvent] = useState<EventItem | null>(null);
  const [category, setCategory] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchEvents();
        setEvents(data);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'Failed to load events.';
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

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
          {loading && (
            <div className="rounded-md border border-slate-300 bg-white p-6 text-sm text-slate-600">
              Loading events...
            </div>
          )}

          {!loading && error && (
            <div className="rounded-md border border-red-300 bg-red-50 p-6 text-sm text-red-700">
              {error}
            </div>
          )}

          {!loading && !error && filteredEvents.length === 0 && (
            <div className="rounded-md border border-slate-300 bg-white p-6 text-sm text-slate-600">
              No events found.
            </div>
          )}

          {!loading && !error && filteredEvents.length > 0 && (
            <EventList
              events={filteredEvents}
              selectedEvent={selectedEvent}
              onSelect={setSelectedEvent}
              onHover={setHoveredEvent}
            />
          )}
        </div>
      </div>
    </MainLayout>
  );
}