import type { InitiativeStatus, Source, TimelineEvent } from './common';

export type InternationalProjectType =
  | 'BIS'
  | 'mCBDC'
  | 'stablecoin'
  | 'standards'
  | 'sharedLedger'
  | 'cross-border-wCBDC'
  | 'tokenised-deposit';

export type TechnicalStandard =
  | 'ISO-20022'
  | 'ERC-20'
  | 'ERC-3643'
  | 'SWIFT'
  | 'FIX'
  | 'W3C-DID'
  | 'other';

export type InternationalProject = {
  id: string;
  name: string;
  shortName: string | null;
  participants: string[];
  type: InternationalProjectType;
  status: InitiativeStatus;
  description: string;
  objectives: string[];
  technicalStandards: TechnicalStandard[];
  settlementModels: string[];
  keyFindings: string[];
  outcome: string | null;
  leadOrganisation: string;
  timeline: TimelineEvent[];
  lastUpdated: string;
  sources: Source[];
  relatedProjects: string[];
};
