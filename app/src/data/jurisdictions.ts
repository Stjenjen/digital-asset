import type { Jurisdiction } from '@/types';

export const jurisdictions: Jurisdiction[] = [
  // Asia
  { id: 'china', slug: 'china', name: 'China', region: 'Asia', isEUMember: false, isEurozoneMember: false, flag: '🇨🇳' },
  { id: 'singapore', slug: 'singapore', name: 'Singapore', region: 'Asia', isEUMember: false, isEurozoneMember: false, flag: '🇸🇬' },
  { id: 'hong-kong', slug: 'hong-kong', name: 'Hong Kong', region: 'Asia', isEUMember: false, isEurozoneMember: false, flag: '🇭🇰' },
  { id: 'japan', slug: 'japan', name: 'Japan', region: 'Asia', isEUMember: false, isEurozoneMember: false, flag: '🇯🇵' },
  { id: 'south-korea', slug: 'south-korea', name: 'South Korea', region: 'Asia', isEUMember: false, isEurozoneMember: false, flag: '🇰🇷' },
  { id: 'india', slug: 'india', name: 'India', region: 'Asia', isEUMember: false, isEurozoneMember: false, flag: '🇮🇳' },
  { id: 'australia', slug: 'australia', name: 'Australia', region: 'Asia', isEUMember: false, isEurozoneMember: false, flag: '🇦🇺' },
  { id: 'thailand', slug: 'thailand', name: 'Thailand', region: 'Asia', isEUMember: false, isEurozoneMember: false, flag: '🇹🇭' },
  { id: 'malaysia', slug: 'malaysia', name: 'Malaysia', region: 'Asia', isEUMember: false, isEurozoneMember: false, flag: '🇲🇾' },
  // Americas
  { id: 'us', slug: 'us', name: 'United States', region: 'Americas', isEUMember: false, isEurozoneMember: false, flag: '🇺🇸' },
  { id: 'canada', slug: 'canada', name: 'Canada', region: 'Americas', isEUMember: false, isEurozoneMember: false, flag: '🇨🇦' },
  { id: 'brazil', slug: 'brazil', name: 'Brazil', region: 'Americas', isEUMember: false, isEurozoneMember: false, flag: '🇧🇷' },
  // EU-Wide
  { id: 'ecb', slug: 'ecb', name: 'European Central Bank / EU', region: 'EU-Wide', isEUMember: false, isEurozoneMember: false, flag: '🇪🇺' },
  // Europe (national)
  { id: 'france', slug: 'france', name: 'France', region: 'Europe', isEUMember: true, isEurozoneMember: true, flag: '🇫🇷' },
  { id: 'germany', slug: 'germany', name: 'Germany', region: 'Europe', isEUMember: true, isEurozoneMember: true, flag: '🇩🇪' },
  { id: 'italy', slug: 'italy', name: 'Italy', region: 'Europe', isEUMember: true, isEurozoneMember: true, flag: '🇮🇹' },
  { id: 'netherlands', slug: 'netherlands', name: 'Netherlands', region: 'Europe', isEUMember: true, isEurozoneMember: true, flag: '🇳🇱' },
  { id: 'sweden', slug: 'sweden', name: 'Sweden', region: 'Europe', isEUMember: true, isEurozoneMember: false, flag: '🇸🇪' },
  { id: 'switzerland', slug: 'switzerland', name: 'Switzerland', region: 'Europe', isEUMember: false, isEurozoneMember: false, flag: '🇨🇭' },
  { id: 'uk', slug: 'uk', name: 'United Kingdom', region: 'Europe', isEUMember: false, isEurozoneMember: false, flag: '🇬🇧' },
  // Middle East
  { id: 'uae', slug: 'uae', name: 'UAE', region: 'Middle East', isEUMember: false, isEurozoneMember: false, flag: '🇦🇪' },
  { id: 'saudi-arabia', slug: 'saudi-arabia', name: 'Saudi Arabia', region: 'Middle East', isEUMember: false, isEurozoneMember: false, flag: '🇸🇦' },
  // Africa / Others
  { id: 'south-africa', slug: 'south-africa', name: 'South Africa', region: 'Africa', isEUMember: false, isEurozoneMember: false, flag: '🇿🇦' },
  { id: 'norway', slug: 'norway', name: 'Norway', region: 'Europe', isEUMember: false, isEurozoneMember: false, flag: '🇳🇴' },
];

export function getAllJurisdictions(): Jurisdiction[] {
  return jurisdictions;
}

export function getJurisdictionBySlug(slug: string): Jurisdiction | undefined {
  return jurisdictions.find((j) => j.slug === slug);
}

export function getJurisdictionById(id: string): Jurisdiction | undefined {
  return jurisdictions.find((j) => j.id === id);
}

export function getJurisdictionsByRegion(region: string): Jurisdiction[] {
  return jurisdictions.filter((j) => j.region === region);
}
