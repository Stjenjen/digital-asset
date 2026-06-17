import type { CBDCInitiative, CBDCType } from '@/types/cbdc';
import type { StablecoinJurisdiction } from '@/types/stablecoins';
import type { TokenisationProject } from '@/types/tokenisation';
import type { InternationalProject } from '@/types/interoperability';
import type { InitiativeStatus, Region } from '@/types/common';
import { getJurisdictionRegion } from './jurisdiction-utils';

export function sortByField<T>(items: T[], field: keyof T, dir: 'asc' | 'desc' = 'asc'): T[] {
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av === bv) return 0;
    const cmp = av < bv ? -1 : 1;
    return dir === 'asc' ? cmp : -cmp;
  });
}

export function filterCBDCByRegion(items: CBDCInitiative[], regions: Region[]): CBDCInitiative[] {
  if (regions.length === 0) return items;
  return items.filter((i) => {
    const r = getJurisdictionRegion(i.jurisdiction);
    return r !== null && regions.includes(r);
  });
}

export function filterCBDCByStatus(items: CBDCInitiative[], statuses: InitiativeStatus[]): CBDCInitiative[] {
  if (statuses.length === 0) return items;
  return items.filter((i) => statuses.includes(i.status));
}

export function filterCBDCByType(items: CBDCInitiative[], types: CBDCType[]): CBDCInitiative[] {
  if (types.length === 0) return items;
  return items.filter((i) => types.includes(i.type));
}

export function filterStablecoinsByRegion(items: StablecoinJurisdiction[], regions: Region[]): StablecoinJurisdiction[] {
  if (regions.length === 0) return items;
  return items.filter((i) => {
    const r = getJurisdictionRegion(i.jurisdiction);
    return r !== null && regions.includes(r);
  });
}

export function filterTokenisationByStatus(items: TokenisationProject[], statuses: InitiativeStatus[]): TokenisationProject[] {
  if (statuses.length === 0) return items;
  return items.filter((i) => statuses.includes(i.status));
}

export function filterInteropByType(items: InternationalProject[], types: string[]): InternationalProject[] {
  if (types.length === 0) return items;
  return items.filter((i) => types.includes(i.type));
}
