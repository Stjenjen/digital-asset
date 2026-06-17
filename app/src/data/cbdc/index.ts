import type { CBDCInitiative } from '@/types/cbdc';
import { asiaCBDCInitiatives } from './asia';
import { europeCBDCInitiatives } from './europe';
import { americasCBDCInitiatives } from './americas';
import { othersCBDCInitiatives } from './others';

export { asiaCBDCInitiatives, europeCBDCInitiatives, americasCBDCInitiatives, othersCBDCInitiatives };

export function getAllCBDCInitiatives(): CBDCInitiative[] {
  return [
    ...asiaCBDCInitiatives,
    ...europeCBDCInitiatives,
    ...americasCBDCInitiatives,
    ...othersCBDCInitiatives,
  ];
}

export function getCBDCByJurisdiction(jurisdictionId: string): CBDCInitiative[] {
  return getAllCBDCInitiatives().filter((i) => i.jurisdiction === jurisdictionId);
}
