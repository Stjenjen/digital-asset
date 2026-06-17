'use client';

import { useState } from 'react';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { PageHeader } from '@/components/layout/PageHeader';
import { getAllJurisdictions, getJurisdictionById } from '@/data/jurisdictions';
import { getCBDCByJurisdiction } from '@/data/cbdc';
import { getStablecoinsByJurisdiction } from '@/data/stablecoins';
import { getTokenisationByJurisdiction } from '@/data/tokenisation';
import { getInteropByJurisdiction } from '@/data/interoperability';
import type { Jurisdiction } from '@/types';

const jurisdictions = getAllJurisdictions();

function JurisdictionSelect({
  value,
  onChange,
  exclude,
}: {
  value: string;
  onChange: (v: string) => void;
  exclude?: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
      data-testid="jurisdiction-select"
    >
      <option value="">Select jurisdiction…</option>
      {jurisdictions
        .filter((j) => j.id !== exclude)
        .map((j) => (
          <option key={j.id} value={j.id}>
            {j.flag} {j.name}
          </option>
        ))}
    </select>
  );
}

type CompareData = {
  jurisdiction: Jurisdiction;
  cbdc: ReturnType<typeof getCBDCByJurisdiction>;
  stablecoin: ReturnType<typeof getStablecoinsByJurisdiction>;
  tokenisation: ReturnType<typeof getTokenisationByJurisdiction>;
  interop: ReturnType<typeof getInteropByJurisdiction>;
};

function getCompareData(id: string): CompareData | null {
  const j = getJurisdictionById(id);
  if (!j) return null;
  return {
    jurisdiction: j,
    cbdc: getCBDCByJurisdiction(id),
    stablecoin: getStablecoinsByJurisdiction(id),
    tokenisation: getTokenisationByJurisdiction(id),
    interop: getInteropByJurisdiction(id),
  };
}

export default function ComparePage() {
  const [leftId, setLeftId] = useState('');
  const [rightId, setRightId] = useState('');

  const left = leftId ? getCompareData(leftId) : null;
  const right = rightId ? getCompareData(rightId) : null;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Compare Jurisdictions"
        subtitle="Side-by-side comparison across CBDC, stablecoins, tokenisation, and interoperability"
      />

      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
        <div>
          <label className="text-xs text-slate-400 mb-1.5 block">Jurisdiction A</label>
          <JurisdictionSelect value={leftId} onChange={setLeftId} exclude={rightId} />
        </div>
        <div>
          <label className="text-xs text-slate-400 mb-1.5 block">Jurisdiction B</label>
          <JurisdictionSelect value={rightId} onChange={setRightId} exclude={leftId} />
        </div>
      </div>

      {left && right ? (
        <div className="space-y-8">
          {/* Header */}
          <div className="grid grid-cols-[1fr_1fr] sm:grid-cols-[200px_1fr_1fr] gap-4">
            <div className="hidden sm:block" />
            <div className="text-center">
              <span className="text-2xl">{left.jurisdiction.flag}</span>
              <p className="mt-1 font-semibold text-slate-100">{left.jurisdiction.name}</p>
              <p className="text-xs text-slate-500">{left.jurisdiction.region}</p>
            </div>
            <div className="text-center">
              <span className="text-2xl">{right.jurisdiction.flag}</span>
              <p className="mt-1 font-semibold text-slate-100">{right.jurisdiction.name}</p>
              <p className="text-xs text-slate-500">{right.jurisdiction.region}</p>
            </div>
          </div>

          {/* CBDC comparison */}
          <CompareSection title="CBDC">
            <CompareRow label="Initiatives">
              <Cell>{left.cbdc.length ? `${left.cbdc.length} initiative(s)` : 'None tracked'}</Cell>
              <Cell>{right.cbdc.length ? `${right.cbdc.length} initiative(s)` : 'None tracked'}</Cell>
            </CompareRow>
            {[0, 1].map((idx) => {
              const li = left.cbdc[idx];
              const ri = right.cbdc[idx];
              if (!li && !ri) return null;
              return (
                <CompareRow key={idx} label={idx === 0 ? 'Primary CBDC' : 'Secondary CBDC'}>
                  <Cell>
                    {li ? (
                      <div className="space-y-1">
                        <div className="font-medium text-slate-200 text-xs">{li.name}</div>
                        <StatusBadge status={li.status} size="sm" />
                        <div className="text-xs text-slate-500 capitalize">{li.type} · {li.techModel.replace(/-/g, ' ')}</div>
                      </div>
                    ) : '—'}
                  </Cell>
                  <Cell>
                    {ri ? (
                      <div className="space-y-1">
                        <div className="font-medium text-slate-200 text-xs">{ri.name}</div>
                        <StatusBadge status={ri.status} size="sm" />
                        <div className="text-xs text-slate-500 capitalize">{ri.type} · {ri.techModel.replace(/-/g, ' ')}</div>
                      </div>
                    ) : '—'}
                  </Cell>
                </CompareRow>
              );
            })}
          </CompareSection>

          {/* Stablecoin comparison */}
          <CompareSection title="Stablecoins">
            <CompareRow label="Regulatory Status">
              <Cell>{left.stablecoin?.regulation.status.replace(/-/g, ' ') ?? 'No data'}</Cell>
              <Cell>{right.stablecoin?.regulation.status.replace(/-/g, ' ') ?? 'No data'}</Cell>
            </CompareRow>
            <CompareRow label="Key Legislation">
              <Cell>{left.stablecoin?.regulation.keyLegislation[0]?.title ?? '—'}</Cell>
              <Cell>{right.stablecoin?.regulation.keyLegislation[0]?.title ?? '—'}</Cell>
            </CompareRow>
            <CompareRow label="Major Issuers">
              <Cell>
                {left.stablecoin?.issuers.map((i) => i.coins[0]).join(', ') ?? '—'}
              </Cell>
              <Cell>
                {right.stablecoin?.issuers.map((i) => i.coins[0]).join(', ') ?? '—'}
              </Cell>
            </CompareRow>
          </CompareSection>

          {/* Tokenisation */}
          <CompareSection title="Tokenisation">
            <CompareRow label="Projects">
              <Cell>{left.tokenisation.length || '0'}</Cell>
              <Cell>{right.tokenisation.length || '0'}</Cell>
            </CompareRow>
            <CompareRow label="Key Projects">
              <Cell>{left.tokenisation.map((p) => p.name).join(', ') || '—'}</Cell>
              <Cell>{right.tokenisation.map((p) => p.name).join(', ') || '—'}</Cell>
            </CompareRow>
          </CompareSection>

          {/* Interop */}
          <CompareSection title="International Projects">
            <CompareRow label="Participating in">
              <Cell>{left.interop.map((p) => p.shortName ?? p.name).join(', ') || 'None'}</Cell>
              <Cell>{right.interop.map((p) => p.shortName ?? p.name).join(', ') || 'None'}</Cell>
            </CompareRow>
          </CompareSection>
        </div>
      ) : (
        <div className="text-center py-16 text-slate-600">
          Select two jurisdictions above to compare them side-by-side.
        </div>
      )}
    </div>
  );
}

function CompareSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-800 bg-slate-900/80">
        <h3 className="text-sm font-semibold text-slate-300">{title}</h3>
      </div>
      <div className="divide-y divide-slate-800/60">{children}</div>
    </div>
  );
}

function CompareRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[140px_1fr_1fr] sm:grid-cols-[200px_1fr_1fr] gap-4 px-4 py-3 items-start">
      <div className="text-xs text-slate-500 font-medium pt-0.5">{label}</div>
      {children}
    </div>
  );
}

function Cell({ children }: { children: React.ReactNode }) {
  return <div className="text-sm text-slate-300">{children}</div>;
}
