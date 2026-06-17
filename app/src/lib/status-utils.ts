import { STATUS_ORDER, STATUS_COLORS } from '@/constants/statuses';
import type { InitiativeStatus } from '@/types';

export function getStatusColor(status: InitiativeStatus): string {
  return STATUS_COLORS[status] ?? 'bg-slate-700 text-slate-200';
}

export function sortByStatusMaturity(a: InitiativeStatus, b: InitiativeStatus): number {
  return STATUS_ORDER[a] - STATUS_ORDER[b];
}

// Activity state — derived from status, not stored in data
export type ActivityState = 'ongoing' | 'defunct' | 'unknown';

const DEFUNCT_STATUSES = new Set<InitiativeStatus>(['Suspended', 'Cancelled']);

export function getActivityState(status: InitiativeStatus | undefined | null): ActivityState {
  if (!status) return 'unknown';
  if (DEFUNCT_STATUSES.has(status)) return 'defunct';
  return 'ongoing';
}
