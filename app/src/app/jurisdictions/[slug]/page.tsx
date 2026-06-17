import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Timeline } from '@/components/timeline/Timeline';
import { SourcesList } from '@/components/ui/SourcesList';
import { getAllJurisdictions, getJurisdictionBySlug } from '@/data/jurisdictions';
import { getCBDCByJurisdiction } from '@/data/cbdc';
import { getStablecoinsByJurisdiction } from '@/data/stablecoins';
import { getTokenisationByJurisdiction } from '@/data/tokenisation';
import { getInteropByJurisdiction } from '@/data/interoperability';

export async function generateStaticParams() {
  return getAllJurisdictions().map((j) => ({ slug: j.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function JurisdictionPage({ params }: Props) {
  const { slug } = await params;
  const jurisdiction = getJurisdictionBySlug(slug);

  if (!jurisdiction) notFound();

  const cbdcItems = getCBDCByJurisdiction(slug);
  const stablecoin = getStablecoinsByJurisdiction(slug);
  const tokenisationItems = getTokenisationByJurisdiction(slug);
  const interopItems = getInteropByJurisdiction(slug);

  const hasAny = cbdcItems.length > 0 || stablecoin || tokenisationItems.length > 0 || interopItems.length > 0;

  return (
    <div className="space-y-10">
      <div>
        <Link href="/jurisdictions" className="text-xs text-slate-500 hover:text-slate-300 mb-4 inline-block">
          ← All Jurisdictions
        </Link>
        <PageHeader
          title={jurisdiction.name}
          flag={jurisdiction.flag}
          subtitle={`${jurisdiction.region}${jurisdiction.isEUMember ? ' · EU Member' : ''}${jurisdiction.isEurozoneMember ? ' · Eurozone' : ''}`}
        />
      </div>

      {!hasAny && (
        <p className="text-slate-500">No data tracked for this jurisdiction yet.</p>
      )}

      {/* CBDC */}
      {cbdcItems.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-200">CBDCs</h2>
            <Link href={`/cbdc/${slug}`} className="text-xs text-indigo-400 hover:text-indigo-300">
              Full CBDC page →
            </Link>
          </div>
          <div className="space-y-4">
            {cbdcItems.map((item) => (
              <div key={item.id} className="rounded-xl bg-slate-900 border border-slate-800 p-5">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-semibold text-slate-100">{item.name}</h3>
                  <StatusBadge status={item.status} size="sm" />
                  <span className="text-xs text-slate-500 capitalize">{item.type}</span>
                </div>
                <p className="mt-2 text-sm text-slate-400">{item.objectives[0]}</p>
                {item.timeline.length > 0 && (
                  <div className="mt-4">
                    <Timeline events={item.timeline.slice(-3)} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Stablecoins */}
      {stablecoin && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-200">Stablecoins</h2>
            <Link href={`/stablecoins/${slug}`} className="text-xs text-indigo-400 hover:text-indigo-300">
              Full stablecoin page →
            </Link>
          </div>
          <div className="rounded-xl bg-slate-900 border border-slate-800 p-5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-medium text-slate-200">Regulatory Status:</span>
              <span className="text-sm text-slate-300 capitalize">
                {stablecoin.regulation.status.replace(/-/g, ' ')}
              </span>
            </div>
            {stablecoin.regulation.existingFramework && (
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {stablecoin.regulation.existingFramework.slice(0, 200)}…
              </p>
            )}
            {stablecoin.issuers.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {stablecoin.issuers.map((iss) => (
                  <span key={iss.name} className="text-xs bg-teal-900/40 text-teal-200 px-2 py-0.5 rounded font-mono">
                    {iss.coins[0] ?? iss.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Tokenisation */}
      {tokenisationItems.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-200">Tokenisation Projects</h2>
            <Link href="/tokenisation" className="text-xs text-indigo-400 hover:text-indigo-300">
              All projects →
            </Link>
          </div>
          <div className="space-y-3">
            {tokenisationItems.map((p) => (
              <Link
                key={p.id}
                href={`/tokenisation/${p.id}`}
                className="flex items-center justify-between rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 px-4 py-3 transition-colors"
              >
                <span className="text-sm font-medium text-slate-200">{p.name}</span>
                <StatusBadge status={p.status} size="sm" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Interoperability */}
      {interopItems.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-200">International Projects</h2>
            <Link href="/interoperability" className="text-xs text-indigo-400 hover:text-indigo-300">
              All projects →
            </Link>
          </div>
          <div className="space-y-3">
            {interopItems.map((p) => (
              <div key={p.id} className="flex items-center justify-between rounded-lg bg-slate-900 border border-slate-800 px-4 py-3">
                <div>
                  <span className="text-sm font-medium text-slate-200">{p.shortName ?? p.name}</span>
                  <span className="ml-2 text-xs text-slate-500">{p.leadOrganisation}</span>
                </div>
                <StatusBadge status={p.status} size="sm" />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
