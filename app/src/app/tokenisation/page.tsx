'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ComparisonTable, type ColumnDef } from '@/components/tables/ComparisonTable';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { SearchBar } from '@/components/ui/SearchBar';
import { PageHeader } from '@/components/layout/PageHeader';
import { getAllTokenisationProjects } from '@/data/tokenisation';
import { getJurisdictionDisplayName, getJurisdictionFlag } from '@/lib/jurisdiction-utils';
import { searchTokenisation } from '@/lib/search';
import type { TokenisationProject } from '@/types/tokenisation';

const allProjects = getAllTokenisationProjects();

const COLUMNS: ColumnDef<TokenisationProject>[] = [
  {
    key: 'name',
    label: 'Project',
    sortable: true,
    render: (row) => (
      <Link href={`/tokenisation/${row.id}`} className="font-medium text-slate-200 hover:text-indigo-300 transition-colors">
        {row.name}
      </Link>
    ),
  },
  {
    key: 'jurisdiction',
    label: 'Primary Jurisdiction',
    sortable: true,
    render: (row) => (
      <div className="flex items-center gap-1.5">
        <span>{getJurisdictionFlag(row.jurisdiction)}</span>
        <span className="text-slate-400 text-xs">{getJurisdictionDisplayName(row.jurisdiction)}</span>
      </div>
    ),
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    render: (row) => <StatusBadge status={row.status} size="sm" />,
  },
  {
    key: 'assetTypes',
    label: 'Asset Types',
    sortable: false,
    render: (row) => (
      <div className="flex flex-wrap gap-1">
        {row.assetTypes.slice(0, 3).map((t) => (
          <span key={t} className="text-xs bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded capitalize">
            {t.replace(/-/g, ' ')}
          </span>
        ))}
      </div>
    ),
  },
  {
    key: 'dvpCapability',
    label: 'DvP',
    sortable: false,
    render: (row) => (
      <span className={`text-xs ${row.dvpCapability ? 'text-green-400' : row.dvpCapability === false ? 'text-slate-500' : 'text-slate-600'}`}>
        {row.dvpCapability === null ? '—' : row.dvpCapability ? 'Yes' : 'No'}
      </span>
    ),
  },
  {
    key: 'participants',
    label: 'Key Participants',
    sortable: false,
    render: (row) => (
      <span className="text-xs text-slate-400">{row.participants.slice(0, 3).join(', ')}</span>
    ),
  },
];

export default function TokenisationPage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query) return allProjects;
    return searchTokenisation(allProjects, query);
  }, [query]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Tokenised Deposits & Financial Assets"
        subtitle="Tokenised bonds, deposits, funds, collateral, and real-world assets — global projects and pilots"
      />

      <SearchBar
        placeholder="Search projects, participants…"
        onSearch={setQuery}
        className="w-full sm:max-w-sm"
      />

      <div className="text-xs text-slate-500">
        {filtered.length} of {allProjects.length} projects
      </div>

      <ComparisonTable
        rows={filtered}
        columns={COLUMNS}
        getRowKey={(row) => row.id}
        emptyMessage="No tokenisation projects match your search."
      />
    </div>
  );
}
