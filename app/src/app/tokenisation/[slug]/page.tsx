import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Timeline } from '@/components/timeline/Timeline';
import { SourcesList } from '@/components/ui/SourcesList';
import { getAllTokenisationProjects } from '@/data/tokenisation';
import { getJurisdictionDisplayName, getJurisdictionFlag } from '@/lib/jurisdiction-utils';

export async function generateStaticParams() {
  return getAllTokenisationProjects().map((p) => ({ slug: p.id }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function TokenisationProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getAllTokenisationProjects().find((p) => p.id === slug);

  if (!project) notFound();

  const allJurisdictions = [project.jurisdiction, ...project.additionalJurisdictions].filter(
    (j) => j !== 'multi'
  );

  return (
    <div className="space-y-8">
      <div>
        <Link href="/tokenisation" className="text-xs text-slate-500 hover:text-slate-300 mb-4 inline-block">
          ← All Projects
        </Link>
        <PageHeader
          title={project.name}
          subtitle={`Tokenisation project — ${project.jurisdiction}`}
          badge={<StatusBadge status={project.status} />}
        />
      </div>

      {/* Jurisdictions */}
      <div className="flex flex-wrap gap-2">
        {allJurisdictions.map((j) => (
          <div key={j} className="flex items-center gap-1.5 bg-slate-800 rounded-full px-3 py-1">
            <span>{getJurisdictionFlag(j)}</span>
            <span className="text-xs text-slate-300">{getJurisdictionDisplayName(j)}</span>
          </div>
        ))}
      </div>

      {/* Key details */}
      <div className="rounded-xl bg-slate-900 border border-slate-800 p-6">
        <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Field label="Asset Types" value={project.assetTypes.map((t) => t.replace(/-/g, ' ')).join(', ')} capitalize />
          <Field label="Settlement Models" value={project.settlementModels.join(', ')} />
          <Field label="DvP Capability" value={project.dvpCapability === null ? '—' : project.dvpCapability ? 'Yes' : 'No'} />
          <Field label="PvP Capability" value={project.pvpCapability === null ? '—' : project.pvpCapability ? 'Yes' : 'No'} />
          {project.regulatoryFramework && (
            <Field label="Regulatory Framework" value={project.regulatoryFramework} colSpan />
          )}
          {project.technologyStack.length > 0 && (
            <Field label="Technology Stack" value={project.technologyStack.join(', ')} colSpan />
          )}
        </dl>
      </div>

      {/* Objectives */}
      <section>
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Objectives</h2>
        <ul className="space-y-2">
          {project.objectives.map((o, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="text-indigo-500 mt-1 shrink-0">•</span> {o}
            </li>
          ))}
        </ul>
      </section>

      {/* Participants */}
      <section>
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Participants</h2>
        <div className="flex flex-wrap gap-2">
          {project.participants.map((p) => (
            <span key={p} className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded">{p}</span>
          ))}
        </div>
      </section>

      {/* Key findings */}
      {project.keyFindings.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Key Findings</h2>
          <ul className="space-y-2">
            {project.keyFindings.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-green-500 mt-1 shrink-0">✓</span> {f}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Notes */}
      {project.notes && (
        <p className="text-sm text-slate-400 bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 leading-relaxed">
          {project.notes}
        </p>
      )}

      {/* Timeline */}
      {project.timeline.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">Timeline</h2>
          <Timeline events={project.timeline} />
        </section>
      )}

      <SourcesList sources={project.sources} />
    </div>
  );
}

function Field({ label, value, capitalize, colSpan }: { label: string; value: string; capitalize?: boolean; colSpan?: boolean }) {
  return (
    <div className={colSpan ? 'sm:col-span-2 lg:col-span-3' : ''}>
      <dt className="text-xs text-slate-500 font-medium">{label}</dt>
      <dd className={`mt-0.5 text-sm text-slate-200 ${capitalize ? 'capitalize' : ''}`}>{value}</dd>
    </div>
  );
}
