type LocationPinIconProps = {
  color: string;
  className?: string;
};

export default function LocationPinIcon({
  color,
  className = 'h-5 w-5',
}: LocationPinIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 21C12 21 18 14.8 18 10A6 6 0 1 0 6 10C6 14.8 12 21 12 21Z"
        fill="white"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" fill={color} />
    </svg>
  );
}