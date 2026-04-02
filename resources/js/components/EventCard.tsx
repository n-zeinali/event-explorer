import { getEventColor } from '@/lib/eventColors';
import type { EventItem } from '@/types/event';
import LocationPinIcon from './LocationPinIcon';

type EventCardProps = {
  event: EventItem;
  isSelected: boolean;
  onSelect: (event: EventItem) => void;
  onHover: (event: EventItem | null) => void;
};

export default function EventCard({
  event,
  isSelected,
  onSelect,
  onHover,
}: EventCardProps) {
  const color = getEventColor(event.id);

  return (
    <div
      onMouseEnter={() => onHover(event)}
      onMouseLeave={() => onHover(null)}
      className="rounded-md border bg-white p-4 shadow-sm transition"
      style={{
        borderColor: isSelected ? color : '#94a3b8',
        boxShadow: isSelected ? `0 0 0 1px ${color}` : undefined,
      }}
    >
      <div className="mb-3 flex items-center gap-2">
        <LocationPinIcon color={color} className="h-5 w-5" />
        <h3 className="text-base font-semibold text-slate-800">{event.title}</h3>
      </div>

      <p className="mb-2 text-sm leading-6 text-gray-600">{event.description}</p>
      <p className="mb-1 text-sm text-gray-500">{event.address}</p>
      <p className="mb-4 text-sm text-gray-500">
        {event.country} • Category {event.category}
      </p>

      <button
        type="button"
        onClick={() => onSelect(event)}
        className="rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
      >
        Select
      </button>
    </div>
  );
}