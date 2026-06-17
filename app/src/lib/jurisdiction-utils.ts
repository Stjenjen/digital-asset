import {
  getJurisdictionBySlug,
  getJurisdictionById,
  getJurisdictionsByRegion,
} from '@/data/jurisdictions';
import type { Region } from '@/types';

export { getJurisdictionBySlug, getJurisdictionById, getJurisdictionsByRegion };

export function getJurisdictionDisplayName(id: string): string {
  return getJurisdictionById(id)?.name ?? id;
}

export function getJurisdictionFlag(id: string): string {
  return getJurisdictionById(id)?.flag ?? '🌐';
}

export function isEUMember(id: string): boolean {
  return getJurisdictionById(id)?.isEUMember ?? false;
}

export function isEurozoneMember(id: string): boolean {
  return getJurisdictionById(id)?.isEurozoneMember ?? false;
}

export function getJurisdictionRegion(id: string): Region | null {
  return getJurisdictionById(id)?.region ?? null;
}
