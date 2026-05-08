/* SVG icon components - outline style, consistent stroke width */

export function TrainIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="20" height="20" rx="3" />
      <line x1="6" y1="14" x2="26" y2="14" />
      <circle cx="11" cy="28" r="2" />
      <circle cx="21" cy="28" r="2" />
      <line x1="9" y1="24" x2="11" y2="26" />
      <line x1="23" y1="24" x2="21" y2="26" />
      <rect x="10" y="7" width="5" height="5" rx="1" />
      <rect x="17" y="7" width="5" height="5" rx="1" />
      <circle cx="12" cy="18" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="20" cy="18" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ContainerIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="26" height="16" rx="2" />
      <line x1="10" y1="8" x2="10" y2="24" />
      <line x1="16" y1="8" x2="16" y2="24" />
      <line x1="22" y1="8" x2="22" y2="24" />
      <line x1="3" y1="16" x2="29" y2="16" />
    </svg>
  );
}

export function ExpeditionIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 24 L16 4 L28 24 Z" />
      <circle cx="16" cy="16" r="3" />
      <line x1="16" y1="13" x2="16" y2="8" />
      <line x1="16" y1="19" x2="16" y2="22" />
      <line x1="13" y1="16" x2="10" y2="16" />
      <line x1="19" y1="16" x2="22" y2="16" />
    </svg>
  );
}

export function TerminalIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="12" width="24" height="16" rx="2" />
      <path d="M8 12 L8 6 L24 6 L24 12" />
      <line x1="16" y1="6" x2="16" y2="2" />
      <line x1="12" y1="2" x2="20" y2="2" />
      <line x1="4" y1="20" x2="28" y2="20" />
      <circle cx="10" cy="16" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="22" cy="16" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function OversizedIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="14" width="24" height="8" rx="1" />
      <path d="M8 14 L8 8 L24 8 L24 14" />
      <line x1="2" y1="22" x2="30" y2="22" />
      <line x1="2" y1="6" x2="2" y2="26" strokeDasharray="2 2" />
      <line x1="30" y1="6" x2="30" y2="26" strokeDasharray="2 2" />
      <path d="M12 8 L12 4" />
      <path d="M20 8 L20 4" />
      <path d="M10 4 L22 4" />
    </svg>
  );
}

export function MilitaryIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4 L20 10 L28 10 L22 16 L24 24 L16 20 L8 24 L10 16 L4 10 L12 10 Z" />
      <circle cx="16" cy="14" r="3" />
    </svg>
  );
}

export function RentalIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="10" width="24" height="12" rx="2" />
      <circle cx="10" cy="26" r="2" />
      <circle cx="22" cy="26" r="2" />
      <line x1="8" y1="22" x2="10" y2="24" />
      <line x1="24" y1="22" x2="22" y2="24" />
      <line x1="12" y1="10" x2="12" y2="22" />
      <line x1="20" y1="10" x2="20" y2="22" />
      <path d="M14 6 L18 6 L18 10 L14 10 Z" />
    </svg>
  );
}

export function BlueprintIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="24" height="24" rx="2" />
      <line x1="4" y1="10" x2="28" y2="10" />
      <line x1="10" y1="10" x2="10" y2="28" />
      <rect x="14" y="14" width="10" height="6" rx="1" strokeDasharray="2 2" />
      <line x1="14" y1="17" x2="24" y2="17" strokeDasharray="2 2" />
      <circle cx="7" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Advantage icons for the benefits strip */
export function MapIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="10" r="3" />
      <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 8 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export function WagonIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="10" rx="2" />
      <circle cx="7" cy="19" r="2" />
      <circle cx="17" cy="19" r="2" />
      <line x1="5" y1="16" x2="7" y2="17" />
      <line x1="19" y1="16" x2="17" y2="17" />
    </svg>
  );
}

export function DocumentIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
      <path d="M14 2v6h6" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="13" y2="17" />
    </svg>
  );
}

export function TrackingIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
    </svg>
  );
}

/* Shield icon for legal section */
export function ShieldIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3L4 8v8c0 7.18 5.12 13.88 12 16 6.88-2.12 12-8.82 12-16V8L16 3z" />
      <path d="M12 16l3 3 5-6" />
    </svg>
  );
}

export function InsuranceIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="12" />
      <path d="M16 8v16" />
      <path d="M12 12h6a2 2 0 010 4h-6" />
      <path d="M12 16h7a2 2 0 010 4h-7" />
    </svg>
  );
}

export function TaxIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="24" height="24" rx="3" />
      <line x1="10" y1="10" x2="22" y2="22" />
      <circle cx="10" cy="10" r="2" />
      <circle cx="22" cy="22" r="2" />
    </svg>
  );
}

export function FraudIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="12" />
      <line x1="10" y1="10" x2="22" y2="22" />
      <line x1="22" y1="10" x2="10" y2="22" />
    </svg>
  );
}

/* Phone icon */
export function PhoneIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

/* Menu / close icons */
export function MenuIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function CloseIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* Checkmark */
export function CheckIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* Arrow right */
export function ArrowRightIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* Route / movement icon */
export function RouteIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M6 9v2a4 4 0 004 4h4" />
    </svg>
  );
}

/* Eye / transparency icon */
export function EyeIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

/* Map service icon for icon selection */
export const serviceIconMap = {
  train: TrainIcon,
  container: ContainerIcon,
  expedition: ExpeditionIcon,
  terminal: TerminalIcon,
  oversized: OversizedIcon,
  military: MilitaryIcon,
  rental: RentalIcon,
  blueprint: BlueprintIcon,
};
