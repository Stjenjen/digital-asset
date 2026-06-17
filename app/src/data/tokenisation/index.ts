import type { TokenisationProject } from '@/types/tokenisation';
import { tokenisationProjects } from './projects';

export { tokenisationProjects };

export function getAllTokenisationProjects(): TokenisationProject[] {
  return tokenisationProjects;
}

export function getTokenisationByJurisdiction(jurisdictionId: string): TokenisationProject[] {
  return tokenisationProjects.filter(
    (p) => p.jurisdiction === jurisdictionId || p.additionalJurisdictions.includes(jurisdictionId)
  );
}
