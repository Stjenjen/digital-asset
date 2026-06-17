'use client';

import { useState } from 'react';
import { JurisdictionCard } from '@/components/cards/JurisdictionCard';
import { PageHeader } from '@/components/layout/PageHeader';
import { getAllJurisdictions } from '@/data/jurisdictions';
import { getAllCBDCInitiatives } from '@/data/cbdc';
import { getAllStablecoins } from '@/data/stablecoins';
import { ALL_REGIONS } from '@/constants/regions';
import { clsx } from 'clsx';
import type { Region } from '@/types';

const jurisdictions = getAllJurisdictions();
const cbdcInitiatives = getAllCBDCInitiatives();
const stablecoins = getAllStablecoins();

export default function JurisdictionsPage() {
  const [activeRegion, setActiveRegion] = useState<Region | 'All'>('All');

  const filtered = activeRegion === 'All'
    ? jurisdictions
    : jurisdictions.filter((j) => j.region === activeRegion);

  return (
    <div className="space-y-6">
      <PageHeader
        title="All Jurisdictions"
        subtitle={`${jurisdictions.length} jurisdictions tracked across 5 regions`}
      />

      <div className="flex flex-wrap gap-2" data-testid="jurisdiction-region-filter">
        {(['All', ...ALL_REGIONS] as const).map((r) => (
          <button
            key={r}
            onClick={() => setActiveRegion(r)}
            className={clsx(
              'px-3 py-1.5 rounded-full text-xs font-medium transition-colors',
              activeRegion === r
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            )}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="text-xs text-slate-500">{filtered.length} jurisdictions</div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((j) => (
          <JurisdictionCard
            key={j.id}
            jurisdiction={j}
            cbdcInitiatives={cbdcInitiatives.filter((i) => i.jurisdiction === j.id)}
            stablecoin={stablecoins.find((s) => s.jurisdiction === j.id)}
          />
        ))}
      </div>
    </div>
  );
}
