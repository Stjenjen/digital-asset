import type { StablecoinJurisdiction } from '@/types/stablecoins';
import { asiaStablecoins } from './asia';
import { europeStablecoins } from './europe';
import { americasStablecoins } from './americas';
import { othersStablecoins } from './others';

export { asiaStablecoins, europeStablecoins, americasStablecoins, othersStablecoins };

export function getAllStablecoins(): StablecoinJurisdiction[] {
  return [
    ...asiaStablecoins,
    ...europeStablecoins,
    ...americasStablecoins,
    ...othersStablecoins,
  ];
}

export function getStablecoinsByJurisdiction(jurisdictionId: string): StablecoinJurisdiction | undefined {
  return getAllStablecoins().find((s) => s.jurisdiction === jurisdictionId);
}
