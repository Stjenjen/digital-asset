import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Timeline } from '@/components/timeline/Timeline';
import { SourcesList } from '@/components/ui/SourcesList';
import { getAllCBDCInitiatives, getCBDCByJurisdiction } from '@/data/cbdc';
import { getJurisdictionBySlug } from '@/data/jurisdictions';
import { getAllJurisdictions } from '@/data/jurisdictions';

export async function generateStaticParams() {
  const initiatives = getAllCBDCInitiatives();
  const slugs = [...new Set(initiatives.map((i) => i.jurisdiction))];
  return slugs.map((s) => ({ jurisdiction: s }));
}

type Props = { params: Promise<{ jurisdiction: string }> };

export default async function CBDCJurisdictionPage({ params }: Props) {
  const { jurisdiction: slug } = await params;
  const jurisdiction = getJurisdictionBySlug(slug);
  const initiatives = getCBDCByJurisdiction(slug);

  if (!jurisdiction || initiatives.length === 0) notFound();

  const retail = initiatives.filter((i) => i.type === 'retail');
  const wholesale = initiatives.filter((i) => i.type === 'wholesale');
  const crossBorder = initiatives.filter((i) => i.type === 'cross-border');

  return (
    <div className="space-y-10">
      <div>
        <Link href="/cbdc" className="text-xs text-slate-500 hover:text-slate-300 mb-4 inline-block">
          ← All CBDCs
        </Link>
        <PageHeader
          title={`${jurisdiction.name} — CBDC`}
          subtitle={`${jurisdiction.region} · ${initiatives.length} initiative${initiatives.length !== 1 ? 's' : ''} tracked`}
          flag={jurisdiction.flag}
        />
      </div>

      {retail.length > 0 && (
        <Section title="Retail CBDC" initiatives={retail} />
      )}
      {wholesale.length > 0 && (
        <Section title="Wholesale CBDC" initiatives={wholesale} />
      )}
      {crossBorder.length > 0 && (
        <Section title="Cross-Border CBDC" initiatives={crossBorder} />
      )}

      <div className="pt-4">
        <Link
          href={`/jurisdictions/${slug}`}
          className="text-sm text-indigo-400 hover:text-indigo-300"
        >
          View full {jurisdiction.name} profile (all sections) →
        </Link>
      </div>
    </div>
  );
}

function Section({ title, initiatives }: { title: string; initiatives: ReturnType<typeof getCBDCByJurisdiction> }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-slate-200 mb-5">{title}</h2>
      <div className="space-y-8">
        {initiatives.map((item) => (
          <div key={item.id} className="rounded-xl bg-slate-900 border border-slate-800 p-6">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <h3 className="text-xl font-bold text-slate-100">{item.name}</h3>
              <StatusBadge status={item.status} />
            </div>

            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Field label="Tech Model" value={item.techModel.replace(/-/g, ' ')} capitalize />
              <Field label="Privacy" value={item.privacyApproach.replace(/-/g, ' ')} capitalize />
              <Field label="Distribution" value={item.distributionModel ?? '—'} capitalize />
              <Field label="Offline Payments" value={item.offlineCapability === null ? '—' : item.offlineCapability ? 'Supported' : 'Not supported'} />
              <Field label="Interest Bearing" value={item.interestBearing === null ? '—' : item.interestBearing ? 'Yes' : 'No'} />
              <Field label="Programmability" value={item.programmability === null ? '—' : item.programmability ? 'Yes' : 'No'} />
              {item.holdingLimits && <Field label="Holding Limits" value={item.holdingLimits} colSpan />}
            </div>

            {item.objectives.length > 0 && (
              <div className="mt-5">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Objectives</h4>
                <ul className="space-y-1">
                  {item.objectives.map((o, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-indigo-500 mt-1 shrink-0">•</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.partners.length > 0 && (
              <div className="mt-5">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Key Partners</h4>
                <div className="flex flex-wrap gap-2">
                  {item.partners.map((p) => (
                    <span key={p} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">{p}</span>
                  ))}
                </div>
              </div>
            )}

            {item.notes && (
              <div className="mt-5 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <p className="text-sm text-slate-400 leading-relaxed">{item.notes}</p>
              </div>
            )}

            {item.timeline.length > 0 && (
              <div className="mt-6">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Timeline</h4>
                <Timeline events={item.timeline} />
              </div>
            )}

            <SourcesList sources={item.sources} />
          </div>
        ))}
      </div>
    </section>
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
