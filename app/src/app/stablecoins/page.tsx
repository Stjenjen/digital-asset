'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ComparisonTable, type ColumnDef } from '@/components/tables/ComparisonTable';
import { RegionFilter } from '@/components/ui/RegionFilter';
import { SearchBar } from '@/components/ui/SearchBar';
import { PageHeader } from '@/components/layout/PageHeader';
import { getAllStablecoins } from '@/data/stablecoins';
import { getJurisdictionDisplayName, getJurisdictionFlag } from '@/lib/jurisdiction-utils';
import { filterStablecoinsByRegion } from '@/lib/filters';
import { searchStablecoins } from '@/lib/search';
import type { StablecoinJurisdiction } from '@/types/stablecoins';
import type { Region } from '@/types';

const STATUS_LABELS: Record<string, string> = {
  'no-framework': 'No Framework',
  'under-consultation': 'Under Consultation',
  'legislation-passed': 'Legislation Passed',
  'licensing-regime-live': 'Licensing Live',
  'restricted': 'Restricted',
  'banned': 'Banned',
};

const STATUS_COLORS: Record<string, string> = {
  'no-framework': 'bg-slate-700 text-slate-300',
  'under-consultation': 'bg-blue-900 text-blue-200',
  'legislation-passed': 'bg-amber-900 text-amber-200',
  'licensing-regime-live': 'bg-green-900 text-green-200',
  'restricted': 'bg-red-900 text-red-200',
  'banned': 'bg-red-950 text-red-400',
};

const allStablecoins = getAllStablecoins();

const COLUMNS: ColumnDef<StablecoinJurisdiction>[] = [
  {
    key: 'jurisdiction',
    label: 'Jurisdiction',
    sortable: true,
    render: (row) => (
      <Link href={`/stablecoins/${row.jurisdiction}`} className="flex items-center gap-2 hover:text-indigo-300 transition-colors">
        <span>{getJurisdictionFlag(row.jurisdiction)}</span>
        <span className="font-medium text-slate-200">{getJurisdictionDisplayName(row.jurisdiction)}</span>
      </Link>
    ),
  },
  {
    key: 'regulation',
    label: 'Regulatory Status',
    sortable: true,
    render: (row) => (
      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${STATUS_COLORS[row.regulation.status] ?? ''}`}>
        {STATUS_LABELS[row.regulation.status] ?? row.regulation.status}
      </span>
    ),
  },
  {
    key: 'regulation',
    label: 'Key Legislation',
    sortable: false,
    render: (row) => (
      <div className="space-y-1">
        {row.regulation.keyLegislation.slice(0, 2).map((k, i) =>
          k.url ? (
            <a key={i} href={k.url} target="_blank" rel="noopener noreferrer"
               className="text-xs text-indigo-400 hover:text-indigo-300 hover:underline block truncate">
              {k.title}
            </a>
          ) : (
            <div key={i} className="text-xs text-slate-400">{k.title}</div>
          )
        )}
      </div>
    ),
  },
  {
    key: 'regulatoryAuthorities',
    label: 'Regulator',
    sortable: false,
    render: (row) => (
      <span className="text-xs text-slate-400">{row.regulatoryAuthorities.financialRegulator ?? '—'}</span>
    ),
  },
  {
    key: 'issuers',
    label: 'Major Issuers',
    sortable: false,
    render: (row) => (
      <div className="flex flex-wrap gap-1">
        {row.issuers.slice(0, 3).map((issuer) => (
          <span key={issuer.name} className="text-xs bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">
            {issuer.coins[0] ?? issuer.name}
          </span>
        ))}
      </div>
    ),
  },
];

export default function StablecoinsPage() {
  const [regions, setRegions] = useState<Region[]>([]);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    let items = allStablecoins;
    if (regions.length > 0) items = filterStablecoinsByRegion(items, regions);
    if (query) items = searchStablecoins(items, query);
    return items;
  }, [regions, query]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Stablecoins"
        subtitle="Regulatory frameworks, major issuers, and market development across jurisdictions"
      />

      <div className="flex flex-col sm:flex-row gap-3">
        <SearchBar
          placeholder="Search jurisdictions, issuers…"
          onSearch={setQuery}
          className="w-full sm:max-w-xs"
        />
      </div>

      <RegionFilter selected={regions} onChange={setRegions} />

      <div className="text-xs text-slate-500">
        {filtered.length} of {allStablecoins.length} jurisdictions
      </div>

      <ComparisonTable
        rows={filtered}
        columns={COLUMNS}
        getRowKey={(row) => row.id}
        emptyMessage="No stablecoin records match your filters."
      />
    </div>
  );
}
