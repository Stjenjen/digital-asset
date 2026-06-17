import Fuse from 'fuse.js';
import type { CBDCInitiative } from '@/types/cbdc';
import type { StablecoinJurisdiction } from '@/types/stablecoins';
import type { TokenisationProject } from '@/types/tokenisation';
import type { InternationalProject } from '@/types/interoperability';

const FUSE_OPTIONS = { threshold: 0.35 };

export function searchCBDC(items: CBDCInitiative[], query: string): CBDCInitiative[] {
  if (!query.trim()) return items;
  const fuse = new Fuse(items, { ...FUSE_OPTIONS, keys: ['name', 'jurisdiction', 'objectives', 'notes'] });
  return fuse.search(query).map((r) => r.item);
}

export function searchStablecoins(items: StablecoinJurisdiction[], query: string): StablecoinJurisdiction[] {
  if (!query.trim()) return items;
  const fuse = new Fuse(items, { ...FUSE_OPTIONS, keys: ['jurisdiction', 'issuers.name', 'issuers.coins'] });
  return fuse.search(query).map((r) => r.item);
}

export function searchTokenisation(items: TokenisationProject[], query: string): TokenisationProject[] {
  if (!query.trim()) return items;
  const fuse = new Fuse(items, { ...FUSE_OPTIONS, keys: ['name', 'jurisdiction', 'participants', 'objectives'] });
  return fuse.search(query).map((r) => r.item);
}

export function searchInterop(items: InternationalProject[], query: string): InternationalProject[] {
  if (!query.trim()) return items;
  const fuse = new Fuse(items, { ...FUSE_OPTIONS, keys: ['name', 'shortName', 'participants', 'description'] });
  return fuse.search(query).map((r) => r.item);
}
