import type { InitiativeStatus, Source, TimelineEvent } from './common';

export type CBDCType = 'retail' | 'wholesale' | 'cross-border';

export type TechModel =
  | 'account-based'
  | 'token-based'
  | 'hybrid'
  | 'DLT'
  | 'centralised'
  | 'two-tier'
  | 'unknown';

export type PrivacyApproach =
  | 'full-anonymity'
  | 'pseudonymous'
  | 'tiered-privacy'
  | 'supervised-anonymity'
  | 'fully-traceable'
  | 'under-design'
  | 'unknown';

export type DistributionModel = 'direct' | 'two-tier' | 'hybrid' | null;

export type CBDCInitiative = {
  id: string;
  jurisdiction: string;
  name: string;
  type: CBDCType;
  status: InitiativeStatus;
  objectives: string[];
  techModel: TechModel;
  privacyApproach: PrivacyApproach;
  offlineCapability: boolean | null;
  holdingLimits: string | null;
  interestBearing: boolean | null;
  programmability: boolean | null;
  distributionModel: DistributionModel;
  dvpCapability: boolean | null;
  pvpCapability: boolean | null;
  interbankSettlement: boolean | null;
  securitiesSettlement: boolean | null;
  crossBorderProjects: string[];
  partners: string[];
  technologyProviders: string[];
  timeline: TimelineEvent[];
  lastUpdated: string;
  sources: Source[];
  notes: string | null;
};
