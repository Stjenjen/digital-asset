import type { InitiativeStatus } from '@/types';

export const ALL_STATUSES: InitiativeStatus[] = [
  'Research',
  'Consultation',
  'PoC',
  'Pilot',
  'Production Pilot',
  'Live',
  'Suspended',
  'Cancelled',
];

export const STATUS_ORDER: Record<InitiativeStatus, number> = {
  Cancelled: 0,
  Suspended: 1,
  Research: 2,
  Consultation: 3,
  PoC: 4,
  Pilot: 5,
  'Production Pilot': 6,
  Live: 7,
};

export const STATUS_COLORS: Record<InitiativeStatus, string> = {
  Research: 'bg-slate-700 text-slate-200',
  Consultation: 'bg-blue-800 text-blue-200',
  PoC: 'bg-purple-800 text-purple-200',
  Pilot: 'bg-amber-800 text-amber-200',
  'Production Pilot': 'bg-orange-800 text-orange-200',
  Live: 'bg-green-800 text-green-200',
  Suspended: 'bg-red-800 text-red-200',
  Cancelled: 'bg-red-950 text-red-300',
};
