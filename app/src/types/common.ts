export type InitiativeStatus =
  | 'Research'
  | 'Consultation'
  | 'PoC'
  | 'Pilot'
  | 'Production Pilot'
  | 'Live'
  | 'Suspended'
  | 'Cancelled';

export type Region =
  | 'Asia'
  | 'Americas'
  | 'Europe'
  | 'EU-Wide'
  | 'Middle East'
  | 'Africa';

export type SourceType = 'official' | 'BIS' | 'IMF' | 'academic' | 'industry';

export type Source = {
  title: string;
  url: string;
  publisher: string;
  date?: string;
  type: SourceType;
};

export type TimelineEvent = {
  date: string;
  description: string;
  status?: InitiativeStatus;
  source?: Source;
};

export type Jurisdiction = {
  id: string;
  slug: string;
  name: string;
  region: Region;
  isEUMember: boolean;
  isEurozoneMember: boolean;
  flag: string;
};
