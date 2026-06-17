import type { InitiativeStatus, Source, TimelineEvent } from './common';

export type TokenisedAssetType =
  | 'deposit'
  | 'government-bond'
  | 'corporate-bond'
  | 'money-market-fund'
  | 'commercial-paper'
  | 'repo-collateral'
  | 'equity'
  | 'real-world-asset'
  | 'fund'
  | 'other';

export type SettlementModel = 'DvP' | 'PvP' | 'atomic' | 'programmable' | 'conventional';

export type TokenisationProject = {
  id: string;
  name: string;
  jurisdiction: string;
  additionalJurisdictions: string[];
  assetTypes: TokenisedAssetType[];
  participants: string[];
  status: InitiativeStatus;
  objectives: string[];
  settlementModels: SettlementModel[];
  dvpCapability: boolean | null;
  pvpCapability: boolean | null;
  technologyStack: string[];
  regulatoryFramework: string | null;
  keyFindings: string[];
  timeline: TimelineEvent[];
  lastUpdated: string;
  sources: Source[];
  notes: string | null;
};
