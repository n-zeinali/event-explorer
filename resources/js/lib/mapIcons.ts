import L from 'leaflet';

export function createPinIcon(color: string, isSelected: boolean) {
  const size = isSelected ? 28 : 24;
  const innerCircle = isSelected ? 5 : 4;

  return L.divIcon({
    className: '',
    html: `
      <div style="width:${size}px;height:${size}px;display:flex;align-items:center;justify-content:center;">
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 21C12 21 18 14.8 18 10A6 6 0 1 0 6 10C6 14.8 12 21 12 21Z"
            fill="white"
            stroke="${color}"
            stroke-width="${isSelected ? 2.5 : 2}"
            stroke-linejoin="round"
          />
          <circle cx="12" cy="10" r="${innerCircle}" fill="${color}" />
        </svg>
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  });
}