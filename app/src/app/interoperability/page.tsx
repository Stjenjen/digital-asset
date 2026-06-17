'use client';

import { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { SearchBar } from '@/components/ui/SearchBar';
import { PageHeader } from '@/components/layout/PageHeader';
import { Timeline } from '@/components/timeline/Timeline';
import { SourcesList } from '@/components/ui/SourcesList';
import { getAllInteropProjects } from '@/data/interoperability';
import { getJurisdictionFlag, getJurisdictionDisplayName } from '@/lib/jurisdiction-utils';
import { searchInterop } from '@/lib/search';
import type { InternationalProject } from '@/types/interoperability';

const allProjects = getAllInteropProjects();

const TYPE_LABELS: Record<string, string> = {
  BIS: 'BIS Project',
  mCBDC: 'Multi-CBDC',
  stablecoin: 'Stablecoin',
  standards: 'Standards',
  sharedLedger: 'Shared Ledger',
  'cross-border-wCBDC': 'Cross-Border wCBDC',
  'tokenised-deposit': 'Tokenised Deposit',
};

function ProjectRow({
  project,
  expanded,
  onToggle,
}: {
  project: InternationalProject;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <>
      <tr
        onClick={onToggle}
        className={`cursor-pointer transition-colors border-b border-slate-800/60 ${
          expanded
            ? 'bg-indigo-950/30 border-l-2 border-l-indigo-500'
            : 'hover:bg-slate-800/30'
        }`}
      >
        {/* Project */}
        <td className="px-4 py-3 text-slate-300 align-top">
          <div className="font-medium text-slate-200">{project.shortName ?? project.name}</div>
          {project.shortName && <div className="text-xs text-slate-500">{project.name}</div>}
        </td>

        {/* Type */}
        <td className="px-4 py-3 text-slate-300 align-top">
          <span className="text-xs text-indigo-300 bg-indigo-950/50 px-2 py-0.5 rounded">
            {TYPE_LABELS[project.type] ?? project.type}
          </span>
        </td>

        {/* Status */}
        <td className="px-4 py-3 align-top">
          <StatusBadge status={project.status} size="sm" />
        </td>

        {/* Participants */}
        <td className="px-4 py-3 text-slate-300 align-top">
          <div className="flex flex-wrap gap-1">
            {project.participants.slice(0, 5).map((p) => {
              const flag = getJurisdictionFlag(p);
              return flag !== '🌐' ? (
                <span key={p} title={getJurisdictionDisplayName(p)} className="text-base">{flag}</span>
              ) : (
                <span key={p} className="text-xs text-slate-500">{p}</span>
              );
            })}
          </div>
        </td>

        {/* Led By */}
        <td className="px-4 py-3 text-slate-300 align-top">
          <span className="text-xs text-slate-400">{project.leadOrganisation}</span>
        </td>

        {/* Expand toggle */}
        <td className="px-3 py-3 align-middle text-slate-500">
          {expanded ? (
            <ChevronUp className="w-4 h-4 text-indigo-400" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </td>
      </tr>

      {expanded && (
        <tr className="bg-slate-900/60">
          <td colSpan={6} className="px-6 py-5 border-b border-slate-800/60">
            <div className="space-y-5">
              <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>

              {project.keyFindings.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Key Findings
                  </h4>
                  <ul className="space-y-1.5">
                    {project.keyFindings.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-green-500 mt-0.5 shrink-0">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.outcome && (
                <p className="text-sm text-slate-400 bg-slate-800/50 rounded-lg p-3">
                  {project.outcome}
                </p>
              )}

              {project.timeline.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                    Timeline
                  </h4>
                  <Timeline events={project.timeline} />
                </div>
              )}

              <SourcesList sources={project.sources} />
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default function InteroperabilityPage() {
  const [query, setQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let items = allProjects;
    if (selectedType !== 'all') items = items.filter((p) => p.type === selectedType);
    if (query) items = searchInterop(items, query);
    return items;
  }, [query, selectedType]);

  const types = ['all', ...Array.from(new Set(allProjects.map((p) => p.type)))];

  function toggle(id: string) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="International Coordination & Interoperability"
        subtitle="BIS projects, multi-CBDC initiatives, shared ledgers, and global technical standards"
      />

      <div className="flex flex-col sm:flex-row gap-3">
        <SearchBar
          placeholder="Search projects, participants…"
          onSearch={setQuery}
          className="w-full sm:max-w-xs"
        />
        <div className="flex flex-wrap gap-2">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                selectedType === t
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {t === 'all' ? 'All Types' : (TYPE_LABELS[t] ?? t)}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-800" data-testid="comparison-table">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/60">
              {['Project', 'Type', 'Status', 'Participants', 'Led By', ''].map((label) => (
                <th
                  key={label}
                  className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wide whitespace-nowrap"
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-slate-500">
                  No projects match your filters.
                </td>
              </tr>
            ) : (
              filtered.map((project) => (
                <ProjectRow
                  key={project.id}
                  project={project}
                  expanded={expandedId === project.id}
                  onToggle={() => toggle(project.id)}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-slate-600 text-center">
        Click any row to expand project details
      </p>
    </div>
  );
}
