import Link from 'next/link';
import { StatusBadge } from '@/components/ui/StatusBadge';
import type { Jurisdiction } from '@/types';
import type { CBDCInitiative } from '@/types/cbdc';
import type { StablecoinJurisdiction } from '@/types/stablecoins';

type Props = {
  jurisdiction: Jurisdiction;
  cbdcInitiatives?: CBDCInitiative[];
  stablecoin?: StablecoinJurisdiction;
};

export function JurisdictionCard({ jurisdiction, cbdcInitiatives = [], stablecoin }: Props) {
  const primaryCBDC = cbdcInitiatives.find((i) => i.type === 'retail') ?? cbdcInitiatives[0];

  return (
    <Link
      href={`/jurisdictions/${jurisdiction.slug}`}
      data-testid={`jurisdiction-card-${jurisdiction.slug}`}
      className="group block rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-700 p-4 transition-all hover:shadow-lg hover:shadow-indigo-900/20"
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl leading-none">{jurisdiction.flag}</span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-slate-100 truncate group-hover:text-indigo-300 transition-colors">
              {jurisdiction.name}
            </h3>
            <span className="shrink-0 text-xs text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">
              {jurisdiction.region}
            </span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {primaryCBDC && (
              <StatusBadge status={primaryCBDC.status} size="sm" />
            )}
            {stablecoin && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-teal-900 text-teal-200">
                Stablecoin framework
              </span>
            )}
            {cbdcInitiatives.length === 0 && !stablecoin && (
              <span className="text-xs text-slate-600">No active initiatives</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
