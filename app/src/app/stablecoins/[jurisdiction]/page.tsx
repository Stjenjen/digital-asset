import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { SourcesList } from '@/components/ui/SourcesList';
import { getAllStablecoins, getStablecoinsByJurisdiction } from '@/data/stablecoins';
import { getJurisdictionBySlug } from '@/data/jurisdictions';

export async function generateStaticParams() {
  return getAllStablecoins().map((s) => ({ jurisdiction: s.jurisdiction }));
}

type Props = { params: Promise<{ jurisdiction: string }> };

export default async function StablecoinJurisdictionPage({ params }: Props) {
  const { jurisdiction: slug } = await params;
  const jurisdiction = getJurisdictionBySlug(slug);
  const data = getStablecoinsByJurisdiction(slug);

  if (!jurisdiction || !data) notFound();

  const { regulation, regulatoryAuthorities, issuers, marketDevelopment, relationshipToCBDC } = data;

  return (
    <div className="space-y-10">
      <div>
        <Link href="/stablecoins" className="text-xs text-slate-500 hover:text-slate-300 mb-4 inline-block">
          ← All Stablecoins
        </Link>
        <PageHeader
          title={`${jurisdiction.name} — Stablecoins`}
          flag={jurisdiction.flag}
          subtitle={jurisdiction.region}
        />
      </div>

      {/* Regulatory framework */}
      <section className="rounded-xl bg-slate-900 border border-slate-800 p-6 space-y-5">
        <h2 className="text-lg font-semibold text-slate-200">Regulatory Framework</h2>
        <dl className="grid sm:grid-cols-2 gap-4">
          <DefField label="Existing Framework" value={regulation.existingFramework} long />
          {regulation.proposedLegislation && (
            <DefField label="Proposed Legislation" value={regulation.proposedLegislation} long />
          )}
          <DefField label="Licensing Requirements" value={regulation.licensingRequirements} long />
          <DefField label="Reserve Requirements" value={regulation.reserveRequirements} />
          <DefField label="Redemption Requirements" value={regulation.redemptionRequirements} />
          <DefField label="Consumer Protection" value={regulation.consumerProtection} />
        </dl>
        {regulation.keyLegislation.length > 0 && (
          <div>
            <dt className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-2">Key Legislation</dt>
            <ul className="space-y-1.5">
              {regulation.keyLegislation.map((k, i) => (
                <li key={i} className="text-sm text-slate-300">
                  {k.url ? (
                    <a href={k.url} target="_blank" rel="noopener noreferrer"
                       className="text-indigo-400 hover:text-indigo-300 hover:underline inline-flex items-center gap-1">
                      {k.title}
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  ) : (
                    <span>• {k.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Regulatory authorities */}
      <section className="rounded-xl bg-slate-900 border border-slate-800 p-6">
        <h2 className="text-lg font-semibold text-slate-200 mb-4">Regulatory Authorities</h2>
        <dl className="grid sm:grid-cols-3 gap-4">
          <DefField label="Central Bank" value={regulatoryAuthorities.centralBank} />
          <DefField label="Financial Regulator" value={regulatoryAuthorities.financialRegulator} />
          <DefField label="Securities Regulator" value={regulatoryAuthorities.securitiesRegulator} />
        </dl>
      </section>

      {/* Issuers */}
      {issuers.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-slate-200 mb-4">Major Issuers</h2>
          <div className="space-y-4">
            {issuers.map((issuer) => (
              <div key={issuer.name} className="rounded-xl bg-slate-900 border border-slate-800 p-5">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <h3 className="font-semibold text-slate-100">{issuer.name}</h3>
                    <div className="flex gap-2 mt-1 flex-wrap">
                      {issuer.coins.map((c) => (
                        <span key={c} className="text-xs bg-teal-900/60 text-teal-200 px-2 py-0.5 rounded font-mono">{c}</span>
                      ))}
                    </div>
                  </div>
                  <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full ${
                    issuer.strategicImportance === 'high' ? 'bg-amber-900 text-amber-200'
                    : issuer.strategicImportance === 'medium' ? 'bg-blue-900 text-blue-200'
                    : 'bg-slate-700 text-slate-400'
                  }`}>
                    {issuer.strategicImportance} importance
                  </span>
                </div>
                <dl className="mt-3 grid sm:grid-cols-2 gap-3">
                  <DefField label="Category" value={issuer.category.replace(/-/g, ' ')} capitalize />
                  <DefField label="Regulatory Status" value={issuer.regulatoryStatus} />
                  <DefField label="Reserve Model" value={issuer.reserveModel} long />
                </dl>
                {issuer.partnerships.length > 0 && (
                  <div className="mt-3">
                    <dt className="text-xs text-slate-500 mb-1">Key Partnerships</dt>
                    <div className="flex flex-wrap gap-1.5">
                      {issuer.partnerships.map((p) => (
                        <span key={p} className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded">{p}</span>
                      ))}
                    </div>
                  </div>
                )}
                {issuer.notes && (
                  <p className="mt-3 text-xs text-slate-400 bg-slate-800/50 rounded-lg p-3">{issuer.notes}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Market development */}
      <section className="rounded-xl bg-slate-900 border border-slate-800 p-6 space-y-4">
        <h2 className="text-lg font-semibold text-slate-200">Market Development</h2>
        <DefField label="Banking Sector Participation" value={marketDevelopment.bankingSectorParticipation} long />
        <DefField label="Payment Ecosystem Adoption" value={marketDevelopment.paymentEcosystemAdoption} long />
        <DefField label="Institutional Usage" value={marketDevelopment.institutionalUsage} long />
        {relationshipToCBDC && (
          <DefField label="Relationship to CBDC" value={relationshipToCBDC} long />
        )}
      </section>

      <SourcesList sources={data.sources} />

      <Link href={`/jurisdictions/${slug}`} className="text-sm text-indigo-400 hover:text-indigo-300">
        View full {jurisdiction.name} profile →
      </Link>
    </div>
  );
}

function DefField({ label, value, long, capitalize }: { label: string; value: string | null; long?: boolean; capitalize?: boolean }) {
  if (!value) return null;
  return (
    <div className={long ? 'sm:col-span-2' : ''}>
      <dt className="text-xs text-slate-500 font-medium mb-0.5">{label}</dt>
      <dd className={`text-sm text-slate-300 leading-relaxed ${capitalize ? 'capitalize' : ''}`}>{value}</dd>
    </div>
  );
}
