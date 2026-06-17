import type { InternationalProject } from '@/types/interoperability';
import { interoperabilityProjects } from './projects';

export { interoperabilityProjects };

export function getAllInteropProjects(): InternationalProject[] {
  return interoperabilityProjects;
}

export function getInteropByJurisdiction(jurisdictionId: string): InternationalProject[] {
  return interoperabilityProjects.filter((p) => p.participants.includes(jurisdictionId));
}
