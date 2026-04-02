import EventCard from './EventCard';
import type { EventItem } from '@/types/event';

type EventListProps = {
  events: EventItem[];
  selectedEvent: EventItem | null;
  onSelect: (event: EventItem) => void;
  onHover: (event: EventItem | null) => void;
};

export default function EventList({
  events,
  selectedEvent,
  onSelect,
  onHover,
}: EventListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          isSelected={selectedEvent?.id === event.id}
          onSelect={onSelect}
          onHover={onHover}
        />
      ))}
    </div>
  );
}