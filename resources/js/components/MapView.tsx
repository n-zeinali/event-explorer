import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { useEffect, useMemo, useRef } from 'react';
import L from 'leaflet';
import type { EventItem } from '@/types/event';
import { getEventColor } from '@/lib/eventColors';
import { createPinIcon } from '@/lib/mapIcons';
import 'leaflet/dist/leaflet.css';

type MapViewProps = {
  events: EventItem[];
  selectedEvent: EventItem | null;
  onSelect?: (event: EventItem) => void;
};

function ChangeMapView({ selectedEvent }: { selectedEvent: EventItem | null }) {
  const map = useMap();

  useEffect(() => {
    if (selectedEvent) {
      map.setView(
        [selectedEvent.coordinates.lat, selectedEvent.coordinates.lng],
        7,
        { animate: true }
      );
    }
  }, [selectedEvent, map]);

  return null;
}

function EventMarker({
  event,
  isSelected,
  onSelect,
}: {
  event: EventItem;
  isSelected: boolean;
  onSelect?: (event: EventItem) => void;
}) {
  const markerRef = useRef<L.Marker>(null);
  const color = getEventColor(event.id);

  const icon = useMemo(() => createPinIcon(color, isSelected), [color, isSelected]);

  useEffect(() => {
    if (isSelected && markerRef.current) {
      markerRef.current.openPopup();
    }
  }, [isSelected]);

  return (
    <Marker
      ref={markerRef}
      position={[event.coordinates.lat, event.coordinates.lng]}
      icon={icon}
      eventHandlers={{
        click: () => onSelect?.(event),
      }}
    >
      <Popup>
        <div className="min-w-[180px]">
          <div className="mb-2 flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 rounded-full"
              style={{ backgroundColor: color }}
            />
            <p className="text-sm font-semibold text-slate-800">{event.title}</p>
          </div>

          <p className="mt-1 text-sm text-gray-600">{event.description}</p>
          <p className="mt-2 text-xs text-gray-500">{event.address}</p>
          <p className="text-xs text-gray-500">
            {event.country} • Category {event.category}
          </p>
        </div>
      </Popup>
    </Marker>
  );
}

export default function MapView({
  events,
  selectedEvent,
  onSelect,
}: MapViewProps) {
  return (
    <div className="h-[320px] overflow-hidden border-b border-slate-400 md:h-[420px]">
      <MapContainer
        center={[50.1109, 8.6821]}
        zoom={5}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ChangeMapView selectedEvent={selectedEvent} />

        {events.map((event) => (
          <EventMarker
            key={event.id}
            event={event}
            isSelected={selectedEvent?.id === event.id}
            onSelect={onSelect}
          />
        ))}
      </MapContainer>
    </div>
  );
}