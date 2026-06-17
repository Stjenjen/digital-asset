import Link from 'next/link';
import { SummaryStats } from '@/components/dashboard/SummaryStats';
import { JurisdictionCard } from '@/components/cards/JurisdictionCard';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { getAllCBDCInitiatives } from '@/data/cbdc';
import { getAllStablecoins } from '@/data/stablecoins';
import { getAllTokenisationProjects } from '@/data/tokenisation';
import { getAllInteropProjects } from '@/data/interoperability';
import { getAllJurisdictions } from '@/data/jurisdictions';
import { ArrowRight } from 'lucide-react';

export default function DashboardPage() {
  const cbdcInitiatives = getAllCBDCInitiatives();
  const stablecoins = getAllStablecoins();
  const tokenisationProjects = getAllTokenisationProjects();
  const interopProjects = getAllInteropProjects();
  const jurisdictions = getAllJurisdictions();

  const liveCount = cbdcInitiatives.filter((i) => i.status === 'Live').length;
  const pilotCount = cbdcInitiatives.filter((i) => i.status === 'Pilot' || i.status === 'Production Pilot').length;

  const stats = [
    { label: 'CBDC Initiatives Tracked', value: cbdcInitiatives.length, sub: `${liveCount} live, ${pilotCount} in pilot` },
    { label: 'Jurisdictions', value: jurisdictions.length, sub: 'Across 5 regions' },
    { label: 'Tokenisation Projects', value: tokenisationProjects.length, sub: 'Cross-border & domestic' },
    { label: 'Interop Projects', value: interopProjects.length, sub: 'BIS, mCBDC, standards' },
  ];

  const sections = [
    {
      title: 'CBDCs',
      href: '/cbdc',
      desc: 'Track retail and wholesale CBDC developments across 20+ jurisdictions. Compare status, technology models, and strategic objectives.',
      count: cbdcInitiatives.length,
      highlight: `${liveCount} live deployments`,
    },
    {
      title: 'Stablecoins',
      href: '/stablecoins',
      desc: 'Monitor regulatory frameworks, major issuers, and market development for fiat-backed and institutional stablecoins globally.',
      count: stablecoins.length,
      highlight: 'MiCA, GENIUS Act, MAS framework',
    },
    {
      title: 'Tokenisation',
      href: '/tokenisation',
      desc: 'Follow tokenised deposits, bonds, funds, and real-world assets. Track DvP, atomic settlement, and programmable finance.',
      count: tokenisationProjects.length,
      highlight: 'Project Guardian, DREX, Kinexys',
    },
    {
      title: 'Interoperability',
      href: '/interoperability',
      desc: 'Map cross-border CBDC projects, BIS initiatives, shared ledger experiments, and technical standards like ISO 20022.',
      count: interopProjects.length,
      highlight: 'mBridge, Nexus, Agorá',
    },
  ];

  const featuredJurisdictions = ['china', 'singapore', 'ecb', 'us', 'brazil', 'uk', 'hong-kong', 'uae'];
  const featured = featuredJurisdictions
    .map((id) => jurisdictions.find((j) => j.id === id))
    .filter(Boolean) as typeof jurisdictions;

  return (
    <div className="space-y-12">
      {/* Hero */}
      <div className="pt-4 pb-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/40 text-indigo-300 text-xs font-medium mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Research Intelligence Platform
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
          Digital Money &amp; Financial Infrastructure
        </h1>
        <p className="mt-3 text-slate-400 max-w-2xl text-base leading-relaxed">
          A living, comparative intelligence base tracking CBDCs, stablecoins, tokenised assets, and international coordination across {jurisdictions.length} jurisdictions. Data sourced from central banks, BIS, and official regulators.
        </p>
      </div>

      {/* Stats */}
      <SummaryStats stats={stats} />

      {/* Sections */}
      <div>
        <h2 className="text-lg font-semibold text-slate-200 mb-4">Research Sections</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-700 p-5 transition-all hover:shadow-lg hover:shadow-indigo-900/20 flex flex-col"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
                  {s.title}
                </h3>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors shrink-0 mt-0.5" />
              </div>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed flex-1">{s.desc}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-slate-500">{s.count} tracked</span>
                <span className="text-xs text-indigo-400/80">{s.highlight}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent notable entries */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-200">Notable Developments</h2>
        </div>
        <div className="grid gap-3">
          {cbdcInitiatives
            .filter((i) => i.status === 'Live' || i.status === 'Production Pilot')
            .slice(0, 5)
            .map((item) => {
              const j = jurisdictions.find((jj) => jj.id === item.jurisdiction);
              return (
                <Link
                  key={item.id}
                  href={`/cbdc/${item.jurisdiction}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <span className="text-xl">{j?.flag ?? '🌐'}</span>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm text-slate-200 font-medium">{item.name}</span>
                    <span className="ml-2 text-xs text-slate-500">{j?.name}</span>
                  </div>
                  <StatusBadge status={item.status} size="sm" />
                </Link>
              );
            })}
        </div>
      </div>

      {/* Featured jurisdictions */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-200">Key Jurisdictions</h2>
          <Link href="/jurisdictions" className="text-sm text-indigo-400 hover:text-indigo-300">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {featured.map((j) => (
            <JurisdictionCard
              key={j.id}
              jurisdiction={j}
              cbdcInitiatives={cbdcInitiatives.filter((i) => i.jurisdiction === j.id)}
              stablecoin={stablecoins.find((s) => s.jurisdiction === j.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
