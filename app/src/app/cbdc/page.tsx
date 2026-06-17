'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ComparisonTable, type ColumnDef } from '@/components/tables/ComparisonTable';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { RegionFilter } from '@/components/ui/RegionFilter';
import { SearchBar } from '@/components/ui/SearchBar';
import { PageHeader } from '@/components/layout/PageHeader';
import { getAllCBDCInitiatives } from '@/data/cbdc';
import { CBDCWorldMap } from '@/components/map/CBDCWorldMap';
import { getJurisdictionDisplayName, getJurisdictionFlag } from '@/lib/jurisdiction-utils';
import { filterCBDCByRegion } from '@/lib/filters';
import { searchCBDC } from '@/lib/search';
import { getDefinition } from '@/constants/glossary';
import { getActivityState, type ActivityState } from '@/lib/status-utils';
import type { CBDCInitiative } from '@/types/cbdc';
import type { Region } from '@/types';

const allInitiatives = getAllCBDCInitiatives();

const ACTIVITY_STYLES: Record<ActivityState, { dot: string; label: string; text: string }> = {
  ongoing: { dot: 'bg-green-400', label: 'text-green-400', text: 'Ongoing' },
  defunct: { dot: 'bg-red-500',   label: 'text-red-400',   text: 'Defunct' },
  unknown: { dot: 'bg-slate-600', label: 'text-slate-500', text: 'Unknown' },
};

function ActivityBadge({ state }: { state: ActivityState }) {
  const s = ACTIVITY_STYLES[state];
  return (
    <span className="flex items-center gap-1.5">
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      <span className={`text-xs ${s.label}`}>{s.text}</span>
    </span>
  );
}

const COLUMNS: ColumnDef<CBDCInitiative>[] = [
  {
    key: 'jurisdiction',
    label: 'Jurisdiction',
    sortable: true,
    render: (row) => (
      <Link href={`/cbdc/${row.jurisdiction}`} className="flex items-center gap-2 hover:text-indigo-300 transition-colors">
        <span>{getJurisdictionFlag(row.jurisdiction)}</span>
        <span className="font-medium text-slate-200">{getJurisdictionDisplayName(row.jurisdiction)}</span>
      </Link>
    ),
  },
  {
    key: 'name',
    label: 'Initiative',
    sortable: true,
    render: (row) => <span className="text-slate-300">{row.name}</span>,
  },
  {
    key: 'type',
    label: 'Type',
    sortable: true,
    tooltip: 'Retail CBDC: digital cash for the general public. Wholesale CBDC: restricted to financial institutions for interbank settlement. Cross-border: multi-jurisdiction platforms.',
    render: (row) => <span className="capitalize text-slate-400 text-xs">{row.type}</span>,
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    render: (row) => <StatusBadge status={row.status} size="sm" />,
  },
  {
    key: 'activity',
    label: 'Activity',
    sortable: true,
    tooltip: 'Whether this project is currently active. Ongoing: any active phase (Research through Live). Defunct: Suspended or Cancelled.',
    render: (row) => <ActivityBadge state={getActivityState(row.status)} />,
  },
  {
    key: 'techModel',
    label: 'Tech Model',
    sortable: true,
    tooltip: getDefinition('two-tier') ?? 'Architecture of how the CBDC is issued and distributed. Common models: two-tier (central bank → commercial banks → public), token-based, account-based, hybrid DLT.',
    render: (row) => <span className="text-xs text-slate-400 font-mono capitalize">{row.techModel.replace(/-/g, ' ')}</span>,
  },
  {
    key: 'privacyApproach',
    label: 'Privacy',
    sortable: false,
    tooltip: 'How transaction data is handled. Tiered privacy: anonymous for small amounts, identity-verified above a threshold. Supervised anonymity: traceable by authority if legally required.',
    render: (row) => <span className="text-xs text-slate-400 capitalize">{row.privacyApproach.replace(/-/g, ' ')}</span>,
  },
  {
    key: 'interestBearing',
    label: 'Interest',
    sortable: false,
    render: (row) => (
      <span className={`text-xs ${row.interestBearing === null ? 'text-slate-600' : row.interestBearing ? 'text-green-400' : 'text-slate-400'}`}>
        {row.interestBearing === null ? '—' : row.interestBearing ? 'Yes' : 'No'}
      </span>
    ),
  },
  {
    key: 'offlineCapability',
    label: 'Offline Payments',
    sortable: false,
    render: (row) => (
      <span className={`text-xs ${row.offlineCapability === null ? 'text-slate-600' : row.offlineCapability ? 'text-green-400' : 'text-slate-400'}`}>
        {row.offlineCapability === null ? '—' : row.offlineCapability ? 'Yes' : 'No'}
      </span>
    ),
  },
];

export default function CBDCPage() {
  const [regions, setRegions] = useState<Region[]>([]);
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const filtered = useMemo(() => {
    let items = allInitiatives;
    if (regions.length > 0) items = filterCBDCByRegion(items, regions);
    if (typeFilter !== 'all') items = items.filter((i) => i.type === typeFilter);
    if (query) items = searchCBDC(items, query);
    return items;
  }, [regions, query, typeFilter]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Central Bank Digital Currencies"
        subtitle="Retail, wholesale, and cross-border CBDC initiatives across priority jurisdictions"
      />

      <CBDCWorldMap activeRegions={regions} typeFilter={typeFilter} />

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <SearchBar
          placeholder="Search initiatives, jurisdictions…"
          onSearch={setQuery}
          className="w-full sm:max-w-xs"
        />
        <div className="flex gap-2">
          {(['all', 'retail', 'wholesale', 'cross-border'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors capitalize ${
                typeFilter === t
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {t === 'all' ? 'All Types' : t}
            </button>
          ))}
        </div>
      </div>

      <RegionFilter selected={regions} onChange={setRegions} />

      <div className="text-xs text-slate-500">
        {filtered.length} of {allInitiatives.length} initiatives
      </div>

      <ComparisonTable
        rows={filtered}
        columns={COLUMNS}
        getRowKey={(row) => row.id}
        emptyMessage="No CBDC initiatives match your filters."
      />
    </div>
  );
}
