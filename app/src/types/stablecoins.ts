import type { Source } from './common';

export type StablecoinCategory =
  | 'fiat-backed'
  | 'asset-backed'
  | 'algorithmic'
  | 'institutional-settlement';

export type RegulationStatus =
  | 'no-framework'
  | 'under-consultation'
  | 'legislation-passed'
  | 'licensing-regime-live'
  | 'restricted'
  | 'banned';

export type StablecoinIssuer = {
  name: string;
  coins: string[];
  category: StablecoinCategory;
  jurisdiction: string;
  regulatoryStatus: string;
  reserveModel: string;
  strategicImportance: 'high' | 'medium' | 'low';
  partnerships: string[];
  notes: string | null;
};

export type StablecoinJurisdiction = {
  id: string;
  jurisdiction: string;
  regulation: {
    status: RegulationStatus;
    existingFramework: string | null;
    proposedLegislation: string | null;
    licensingRequirements: string | null;
    reserveRequirements: string | null;
    redemptionRequirements: string | null;
    prudentialStandards: string | null;
    consumerProtection: string | null;
    keyLegislation: { title: string; url?: string }[];
  };
  regulatoryAuthorities: {
    centralBank: string | null;
    financialRegulator: string | null;
    securitiesRegulator: string | null;
    other: string[];
  };
  categories: StablecoinCategory[];
  issuers: StablecoinIssuer[];
  marketDevelopment: {
    bankingSectorParticipation: string;
    paymentEcosystemAdoption: string;
    institutionalUsage: string;
  };
  relationshipToCBDC: string | null;
  lastUpdated: string;
  sources: Source[];
};
