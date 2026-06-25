import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Singapore vs Hong Kong: Digital Money Landscape — Research Paper',
  description:
    'A comparative analysis of CBDC, stablecoins, tokenised bank liabilities, cross-border interoperability, international standards, and digital asset regulation between Singapore and Hong Kong.',
};

// ── Citation helpers ──────────────────────────────────────────────────────────

const REFS: Record<string, { title: string; url: string; publisher: string; year: string }> = {
  r1: {
    title: 'e-HKD Pilot Programme Phase 1 Report',
    url: 'https://www.hkma.gov.hk/media/eng/doc/key-information/press-release/2023/20231030e1a1.pdf',
    publisher: 'HKMA',
    year: '2023',
  },
  r2: {
    title: 'Project Ensemble',
    url: 'https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/fintech/project-ensemble/',
    publisher: 'HKMA',
    year: '2024',
  },
  r3: {
    title: 'Project Orchid: Purpose Bound Money',
    url: 'https://www.mas.gov.sg/schemes-and-initiatives/project-orchid',
    publisher: 'Monetary Authority of Singapore',
    year: '2022',
  },
  r4: {
    title: 'Project Ubin: Central Bank Digital Money using Distributed Ledger Technology',
    url: 'https://www.mas.gov.sg/schemes-and-initiatives/project-ubin',
    publisher: 'Monetary Authority of Singapore',
    year: '2020',
  },
  r5: {
    title: 'Project Ubin+ — Cross-border Foreign Currency Settlement',
    url: 'https://www.mas.gov.sg/news/media-releases/2022/mas-launches-project-ubin-plus',
    publisher: 'Monetary Authority of Singapore',
    year: '2022',
  },
  r6: {
    title: 'MAS Announces Successful Live Trial of Settlement of Interbank Overnight Lending Using Wholesale CBDC',
    url: 'https://www.mas.gov.sg/news/media-releases/2025/mas-announces-successful-live-trial-of-settlement-of-interbank-overnight-lending',
    publisher: 'Monetary Authority of Singapore',
    year: '2025',
  },
  r7: {
    title: 'Stablecoins Ordinance Cap. 656',
    url: 'https://www.elegislation.gov.hk/hk/cap656',
    publisher: 'Hong Kong Government',
    year: '2025',
  },
  r8: {
    title: 'HKMA — Regulatory Regime for Stablecoin Issuers',
    url: 'https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/stablecoin-issuers/',
    publisher: 'HKMA',
    year: '2025',
  },
  r9: {
    title: 'HKMA — Government Welcomes Passage of Stablecoins Bill',
    url: 'https://www.hkma.gov.hk/eng/news-and-media/press-releases/2025/05/20250521-3/',
    publisher: 'HKMA',
    year: '2025',
  },
  r10: {
    title: 'MAS Stablecoin Regulatory Framework',
    url: 'https://www.mas.gov.sg/news/media-releases/2023/mas-finalises-stablecoin-regulatory-framework',
    publisher: 'Monetary Authority of Singapore',
    year: '2023',
  },
  r11: {
    title: 'Payment Services Act 2019 (amended 2023)',
    url: 'https://www.mas.gov.sg/regulation/acts/payment-services-act',
    publisher: 'Monetary Authority of Singapore',
    year: '2023',
  },
  r12: {
    title: 'Project Guardian — MAS',
    url: 'https://www.mas.gov.sg/schemes-and-initiatives/project-guardian',
    publisher: 'Monetary Authority of Singapore',
    year: '2022',
  },
  r13: {
    title: 'Project Guardian Industry Report 2023',
    url: 'https://www.mas.gov.sg/news/media-releases/2023/mas-releases-project-guardian-industry-report',
    publisher: 'Monetary Authority of Singapore',
    year: '2023',
  },
  r14: {
    title: 'Project mBridge — BIS',
    url: 'https://www.bis.org/about/bisih/topics/cbdc/mbridge.htm',
    publisher: 'Bank for International Settlements',
    year: '2024',
  },
  r15: {
    title: 'Project Dunbar Report',
    url: 'https://www.bis.org/publ/othp47.htm',
    publisher: 'Bank for International Settlements',
    year: '2022',
  },
  r16: {
    title: 'Singapore FinTech Festival — About',
    url: 'https://www.fintechfestival.sg',
    publisher: 'Monetary Authority of Singapore',
    year: '2024',
  },
  r17: {
    title: 'Hong Kong FinTech Week',
    url: 'https://www.fintechweek.hk',
    publisher: 'InvestHK',
    year: '2024',
  },
  r18: {
    title: 'Partior — Blockchain Interbank Settlement Network',
    url: 'https://www.partior.com',
    publisher: 'Partior',
    year: '2023',
  },
  r19: {
    title: 'Hong Kong Awards First Stablecoin Licences to HSBC, Standard Chartered-led Group',
    url: 'https://www.coindesk.com/policy/2026/03/24/hong-kong-awards-first-stablecoin-licenses-to-hsbc-standard-chartered-led-group',
    publisher: 'CoinDesk',
    year: '2026',
  },
  r20: {
    title: 'BIS Innovation Hub — Singapore Centre',
    url: 'https://www.bis.org/about/bisih/locations/singapore.htm',
    publisher: 'Bank for International Settlements',
    year: '2023',
  },
  r21: {
    title: 'BIS Innovation Hub — Hong Kong Centre',
    url: 'https://www.bis.org/about/bisih/locations/hongkong.htm',
    publisher: 'Bank for International Settlements',
    year: '2023',
  },
  r22: {
    title: 'Orchid Blueprint: Infrastructure for the Safe and Innovative Use of Digital Money',
    url: 'https://www.mas.gov.sg/-/media/mas-media-library/development/fintech/project-orchid/orchid-blueprint-final.pdf',
    publisher: 'Monetary Authority of Singapore',
    year: '2023',
  },
  r23: {
    title: 'MAS Announces Plans to Support Commercialisation of Asset Tokenisation (Global Layer One)',
    url: 'https://www.mas.gov.sg/news/media-releases/2024/mas-announces-plans-to-support-commercialisation-of-asset-tokenisation',
    publisher: 'Monetary Authority of Singapore',
    year: '2024',
  },
  r24: {
    title: 'Guardian Fixed Income Framework',
    url: 'https://www.mas.gov.sg/publications/monographs-or-information-paper/2024/guardian-fixed-income-framework',
    publisher: 'Monetary Authority of Singapore',
    year: '2024',
  },
  r25: {
    title: 'HKSAR Government Digital Green Bonds Offering (multi-currency, ~HK$6bn)',
    url: 'https://www.hkma.gov.hk/eng/news-and-media/press-releases/2024/02/20240207-6/',
    publisher: 'HKMA',
    year: '2024',
  },
  r26: {
    title: 'HKMA Establishes Tokenised Bond Expert Group',
    url: 'https://www.hkma.gov.hk/eng/news-and-media/press-releases/2026/06/20260605-3/',
    publisher: 'HKMA',
    year: '2026',
  },
  r27: {
    title: 'The Rise of Tokenised Money Market Funds (BIS Bulletin)',
    url: 'https://www.bis.org/publ/bisbull115.pdf',
    publisher: 'Bank for International Settlements',
    year: '2025',
  },
};

function Cite({ id }: { id: string }) {
  const keys = Object.keys(REFS);
  const num = keys.indexOf(id) + 1;
  return (
    <sup>
      <a
        href={`#ref-${id}`}
        className="text-indigo-400 hover:text-indigo-300 transition-colors ml-0.5 text-xs font-mono"
      >
        [{num}]
      </a>
    </sup>
  );
}

// ── Shared section components ─────────────────────────────────────────────────

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-2xl font-bold text-slate-100 mt-14 mb-5 pb-2 border-b border-slate-800 scroll-mt-20"
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold text-indigo-300 mt-8 mb-3">{children}</h3>;
}

function EdgeBox({
  title,
  color,
  items,
}: {
  title: string;
  color: 'blue' | 'green';
  items: string[];
}) {
  const border = color === 'blue' ? 'border-blue-700' : 'border-emerald-700';
  const badge =
    color === 'blue'
      ? 'bg-blue-900/40 text-blue-300 border border-blue-700'
      : 'bg-emerald-900/40 text-emerald-300 border border-emerald-700';
  return (
    <div className={`rounded-xl border ${border} bg-slate-900 p-5`}>
      <p className={`inline-block text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded mb-3 ${badge}`}>
        {title}
      </p>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
            <span className="mt-1 text-xs">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CompareTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-800 my-6">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-800 bg-slate-900">
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={`border-b border-slate-800/60 ${ri % 2 === 0 ? 'bg-slate-950' : 'bg-slate-900/40'}`}
            >
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 text-slate-300 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Pill({ children, color }: { children: string; color: 'indigo' | 'amber' | 'emerald' | 'slate' | 'rose' }) {
  const cls = {
    indigo: 'bg-indigo-900/50 text-indigo-300 border-indigo-700',
    amber: 'bg-amber-900/40 text-amber-300 border-amber-700',
    emerald: 'bg-emerald-900/40 text-emerald-300 border-emerald-700',
    slate: 'bg-slate-800 text-slate-300 border-slate-700',
    rose: 'bg-rose-900/40 text-rose-300 border-rose-700',
  }[color];
  return (
    <span className={`inline-block border text-xs font-medium px-2 py-0.5 rounded-full ${cls}`}>
      {children}
    </span>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HKSingaporeResearchPage() {
  return (
    <article className="max-w-4xl mx-auto py-10">
      {/* ── Draft banner ── */}
      <div className="mb-8 flex items-center gap-3 rounded-lg border border-amber-700 bg-amber-900/20 px-4 py-3 text-sm text-amber-300">
        <span className="font-semibold uppercase tracking-wider text-xs border border-amber-600 rounded px-1.5 py-0.5">
          Draft
        </span>
        This page is a research draft and is generated with the help of AI agent. Please use the information with your own discretion.
      </div>

      {/* ── Title block ── */}
      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
          Research Paper · Digital Money Intelligence
        </p>
        <h1 className="text-4xl font-bold text-slate-50 leading-tight mb-4">
          Singapore vs Hong Kong: Competing Visions for Digital Money Leadership in Asia
        </h1>
        <p className="text-slate-400 text-sm">
          Last updated: June 2026 &nbsp;·&nbsp; Covers: CBDC, Stablecoins, Tokenised Bank
          Liabilities, Cross-Border Interoperability, International Standards, Fintech Ecosystems
        </p>
      </header>

      {/* ── Abstract ── */}
      <section
        id="abstract"
        className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-5 mb-10"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Abstract</p>
        <p className="text-slate-300 leading-relaxed">
          Singapore and Hong Kong are the two dominant international financial centres in Asia,
          sharing comparable legal heritage (common law), regulatory sophistication, open capital
          accounts, and strategic ambitions in digital finance. Yet their approaches to digital
          money — which the Monetary Authority of Singapore frames as three complementary forms:
          wholesale central bank digital currency (CBDC), tokenised bank liabilities, and
          well-regulated stablecoins — reveal meaningfully different strategic philosophies. Singapore has moved
          earlier, built deeper institutional coalitions, commercialised wholesale CBDC
          infrastructure, and authored many of the industry frameworks the sector now references.
          Hong Kong has leveraged its unique position as China&apos;s offshore
          financial hub to pursue a China-corridor strategy through Project Ensemble and mBridge,
          while deploying the world&apos;s first comprehensive stablecoin licensing framework in
          2025 and pioneering repeated real-money digital bond issuance. This paper compares both
          jurisdictions across six dimensions — CBDC, stablecoins, tokenised bank liabilities,
          cross-border interoperability, international standards &amp; framework development, and
          the fintech ecosystem — and assesses the competitive edge each city-state holds as of
          mid-2026.
        </p>
      </section>

      {/* ── Sidebar TOC (sticky on desktop) is skipped here; a simple inline ToC suffices ── */}
      <nav className="mb-10 rounded-lg border border-slate-800 bg-slate-900/50 px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Contents</p>
        <ol className="space-y-1 text-sm text-indigo-400 list-decimal list-inside">
          {[
            ['introduction', 'Introduction'],
            ['cbdc', '1. CBDC Landscape'],
            ['stablecoins', '2. Stablecoins'],
            ['tokenised-deposits', '3. Tokenised Bank Liabilities'],
            ['cross-border', '4. Cross-Border Interoperability'],
            ['standards', '5. International Standards & Framework Development'],
            ['fintech-ecosystem', '6. FinTech Ecosystems & Flagship Events'],
            ['regulatory-philosophy', '7. Regulatory Philosophy'],
            ['competitive-edge', '8. Competitive Edge Summary'],
            ['analysis', '9. Analysis: Scenarios for the Decade Ahead'],
            ['references', 'References'],
          ].map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="hover:text-indigo-300 transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* INTRODUCTION */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <section id="introduction">
        <SectionHeading id="introduction">Introduction</SectionHeading>
        <p className="text-slate-300 leading-relaxed mb-4">
          Among the world&apos;s international financial centres, few rivalries are as instructive
          as that between Singapore and Hong Kong. Both are city-states with open economies,
          deep capital markets, large expatriate financial workforces, and strategic geographic
          positions that make them natural hubs for cross-border money flows across Asia.
          Both host BIS Innovation Hub centres
          <Cite id="r20" />
          <Cite id="r21" /> — the BIS&apos;s research incubators for central bank digital
          currency — and both launched flagship fintech events in 2016 that have grown into
          the largest gatherings of their kind in the region.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          The comparison is particularly revealing because the two cities have made different
          strategic bets. Singapore — a fully independent state since 1965 with no overarching
          sovereign — has positioned itself as the gateway to ASEAN and the broader multilateral
          world, pursuing interoperability with Western central banks and global financial
          institutions and authoring the industry frameworks that codify how tokenised markets
          should work. Hong Kong — a Special Administrative Region of China with its own
          monetary system and common law courts — has an additional card to play: the China
          corridor. Access to the People&apos;s Bank of China&apos;s digital infrastructure,
          mainland capital flows, and the Belt and Road payment network provides Hong Kong
          with a differentiation that Singapore cannot replicate.
        </p>
        <p className="text-slate-300 leading-relaxed">
          This paper assesses the digital money race as of June 2026, examining what each
          city-state has built, what edge each holds, and what the competitive landscape
          looks like for the remainder of this decade.
        </p>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 1: CBDC */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <section id="cbdc">
        <SectionHeading id="cbdc">1. CBDC Landscape</SectionHeading>
        <p className="text-slate-300 leading-relaxed mb-4">
          Both Singapore and Hong Kong have pursued a twin-track CBDC strategy — retail on
          one side, wholesale on the other — reflecting the BIS&apos;s recommended architecture
          for central bank digital money. However, their positions on the maturity spectrum
          differ substantially.
        </p>

        <SubHeading>1.1 Singapore</SubHeading>
        <p className="text-slate-300 leading-relaxed mb-3">
          The Monetary Authority of Singapore (MAS) announced
          <strong className="text-slate-100"> Project Orchid</strong>
          <Cite id="r3" /> at the Singapore FinTech Festival in November 2022. Orchid is
          MAS&apos;s retail CBDC exploration, focused on programmable money and
          &quot;purpose-bound money&quot; (PBM) — digital money that can only be spent on
          specified purposes, tested through government voucher distributions. MAS has been
          deliberately cautious: no decision to issue a retail CBDC has been made, and Orchid
          remains at Proof-of-Concept status.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          Singapore&apos;s wholesale CBDC track is substantially more mature.
          <strong className="text-slate-100"> Project Ubin</strong>
          <Cite id="r4" /> (2016–2020) ran five phases exploring domestic settlement, DvP,
          and cross-border connectivity. Its commercial successor,
          <strong className="text-slate-100"> Partior</strong>
          <Cite id="r18" /> — a DLT-based interbank settlement network incorporated by
          JPMorgan, DBS, and Temasek — went live in 2023 and now processes real SGD and USD
          transactions, with EUR and JPY corridors subsequently added.
          <strong className="text-slate-100"> Project Ubin+</strong>
          <Cite id="r5" /> (announced November 2022) was MAS&apos;s umbrella for cross-border
          wholesale-CBDC interoperability research; its two named workstreams — Project Cedar
          Phase II × Ubin+ (with the New York Fed) and Project Mariana (with the Banque de France
          and Swiss National Bank) — both concluded with final reports in 2023. MAS&apos;s active
          wholesale-CBDC work has since moved to the domestic SGD Testnet live trials (below).
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          The most significant milestone came in November 2025, when MAS announced a
          successful live trial of the
          <strong className="text-slate-100"> SGD Testnet</strong>
          <Cite id="r6" /> — the first real-money wholesale CBDC issuance in Singapore.
          DBS, OCBC, and UOB settled actual interbank overnight lending transactions on a
          shared DLT infrastructure, with transactions recorded in official books and
          regulatory filings. A further milestone is planned for 2026: the issuance of
          tokenised MAS Bills to Primary Dealers settled via wholesale CBDC on the same
          testnet.
        </p>

        <SubHeading>1.2 Hong Kong</SubHeading>
        <p className="text-slate-300 leading-relaxed mb-3">
          The Hong Kong Monetary Authority (HKMA) launched its retail CBDC exploration
          under the name <strong className="text-slate-100">e-HKD</strong> in 2021, with a
          three-rail framework announced in September 2022. The subsequent
          <strong className="text-slate-100"> e-HKD Pilot Programme Phase 1</strong> (2023)
          involved 16 firms across six use case categories — programmable payments, offline
          payments, tokenised deposits, settlement, Web3 transactions, and consumer payments.
          Phase 1 findings, published in October 2023
          <Cite id="r1" />, led to a rebranding as
          <strong className="text-slate-100"> e-HKD+</strong> in 2024, signalling a broader
          scope that explicitly encompasses tokenised deposits and stablecoins alongside a
          retail CBDC. The retail initiative remains at Pilot status, with offline capability
          and programmability confirmed as technically feasible.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          On the wholesale side,
          <strong className="text-slate-100"> Project Ensemble</strong>
          <Cite id="r2" /> (launched March 2024) is HKMA&apos;s flagship wholesale CBDC
          programme. Its sandbox has enabled the first tokenised interbank deposit settlements
          between major commercial banks using wCBDC as the settlement asset, with
          Delivery-versus-Payment (DvP) for tokenised bonds and securities. By January 2025,
          Phase 2 was underway, testing a cross-border corridor with Mainland China — the
          first such DLT-based settlement link between the two financial systems.
        </p>

        <CompareTable
          headers={['Dimension', 'Singapore', 'Hong Kong']}
          rows={[
            [
              'Retail CBDC',
              <>Project Orchid · <Pill color="slate">PoC</Pill> · purpose-bound money, cautious stance</>,
              <>e-HKD+ · <Pill color="amber">Pilot</Pill> · programmability, offline, two-tier</>,
            ],
            [
              'Wholesale CBDC',
              <>SGD Testnet · <Pill color="amber">Pilot</Pill> · live CBDC issuance (Nov 2025), tokenised MAS Bills (2026)</>,
              <>Project Ensemble · <Pill color="amber">Pilot</Pill> · DvP, tokenised deposits, China corridor</>,
            ],
            [
              'Commercialised output',
              <>Partior · <Pill color="emerald">Production Pilot</Pill> · live SGD/USD/EUR settlement</>,
              'None yet; sandbox results feeding e-HKD+ Phase 2',
            ],
            [
              'Notable banking partners',
              'JPMorgan, DBS, OCBC, UOB, StanChart, HSBC',
              'HSBC, Hang Seng, StanChart, BOCHK, Goldman Sachs, Hashkey',
            ],
            [
              'Offline capability',
              'Not yet tested (Orchid PoC scope)',
              'Confirmed (e-HKD+ Phase 1)',
            ],
            [
              'Programmability',
              'Yes (Orchid PBM, SGD Testnet)',
              'Yes (e-HKD+ and Ensemble)',
            ],
          ]}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6" data-testid="cbdc-edge">
          <EdgeBox
            title="SG Competitive Edge — CBDC"
            color="green"
            items={[
              'Partior is live in production — the only commercialised wholesale CBDC network globally',
              'SGD Testnet: first real interbank CBDC transactions booked in official records (Nov 2025)',
              'Longer programme history (Ubin since 2016) with deeper institutional network',
            ]}
          />
          <EdgeBox
            title="HK Competitive Edge — CBDC"
            color="blue"
            items={[
              'China corridor: Project Ensemble cross-border DvP with Mainland — unique to HK',
              'Offline capability confirmed in Phase 1 pilot — ahead of SG on this dimension',
              'e-HKD+ explicitly integrates stablecoins and tokenised deposits into one framework',
            ]}
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 2: STABLECOINS */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <section id="stablecoins">
        <SectionHeading id="stablecoins">2. Stablecoins</SectionHeading>
        <p className="text-slate-300 leading-relaxed mb-4">
          Stablecoin regulation has emerged as a key battleground for financial centre
          credibility. Both Singapore and Hong Kong have enacted comprehensive licensing
          regimes, but their timing, structure, and strategic framing differ in important ways.
        </p>

        <SubHeading>2.1 Singapore</SubHeading>
        <p className="text-slate-300 leading-relaxed mb-3">
          Singapore was the earlier mover. MAS finalised its
          <strong className="text-slate-100"> Stablecoin Regulatory Framework</strong>
          <Cite id="r10" /> in August 2023 — approximately two years before Hong Kong&apos;s
          Ordinance came into force. The framework operates under the amended
          <strong className="text-slate-100"> Payment Services Act (PSA)</strong>
          <Cite id="r11" /> and covers single-currency stablecoins (SCS) pegged to SGD or
          G10 currencies. Key features:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-sm mb-4 pl-2">
          <li>Major Payment Institution (MPI) licence required</li>
          <li>Lower capital barrier: SGD 1 million (vs HKD 25 million in HK)</li>
          <li>100% reserve backing; monthly third-party attestation (Deloitte for StraitsX)</li>
          <li>Par redemption within 5 business days</li>
          <li>
            <strong className="text-slate-100">StraitsX (Xfers)</strong> — issuer of XSGD and
            XUSD — is the first MAS-licensed stablecoin issuer; XSGD is integrated with Grab,
            DBS, and DeFi protocols
          </li>
        </ul>
        <p className="text-slate-300 leading-relaxed mb-4">
          Singapore&apos;s framework, by targeting G10-pegged stablecoins under existing PSA
          infrastructure, was faster to market and has already generated real commercial
          adoption. The lower capital requirement also opened the door to fintech firms,
          not just incumbent banks.
        </p>

        <SubHeading>2.2 Hong Kong</SubHeading>
        <p className="text-slate-300 leading-relaxed mb-3">
          Hong Kong enacted the
          <strong className="text-slate-100"> Stablecoins Ordinance (Cap. 656)</strong>
          <Cite id="r7" />, passed by the Legislative Council on 21 May 2025 and coming
          into force on 1 August 2025 — making Hong Kong one of the first jurisdictions
          globally to have a dedicated stablecoin statute on the books.
          The Ordinance establishes a licensing regime for Fiat-Referenced Stablecoin (FRS)
          issuers administered by HKMA
          <Cite id="r8" /><Cite id="r9" />. Key features include:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-sm mb-4 pl-2">
          <li>Minimum paid-up capital of HKD 25 million</li>
          <li>100% reserve backing at par, held in high-quality liquid assets, segregated from issuer</li>
          <li>HKMA assessed 36 applications in the first licensing round (2025–2026)</li>
          <li>
            First licences granted April 2026 to two consortia: (1) HSBC-led group and (2)
            Standard Chartered / Anchorpoint Financial / Animoca Brands
            <Cite id="r19" />
          </li>
          <li>Prohibition on paying interest on stablecoins</li>
          <li>Six-month transitional period for pre-existing issuers from August 2025</li>
        </ul>
        <p className="text-slate-300 leading-relaxed mb-4">
          HK&apos;s approach is notably <em>banking-led</em>: the first two licensed issuers are
          dominated by the largest global banks with HK operations. This reflects HKMA&apos;s
          preference for systemic stability — licences go to well-capitalised, supervised entities
          rather than crypto-native firms.
        </p>

        <CompareTable
          headers={['Dimension', 'Singapore', 'Hong Kong']}
          rows={[
            ['Framework status', <><Pill color="emerald">Live</Pill> — PSA framework finalised Aug 2023</>, <><Pill color="emerald">Live</Pill> — Ordinance in force Aug 2025</>],
            ['First licence granted', 'StraitsX (Xfers) — MPI licensed under PSA 2023', 'April 2026 (HSBC, StanChart/Animoca consortia)'],
            ['Minimum capital', 'SGD 1 million (~USD 740K)', 'HKD 25 million (~USD 3.2M)'],
            ['Reserve standard', '100% cash/cash equivalents; monthly attestation', '100% HQLA; HKMA oversight'],
            ['Redemption timeframe', 'Within 5 business days at par', 'On demand at par'],
            ['Interest on stablecoins', 'Not explicitly permitted', 'Prohibited'],
            ['Issuer profile', 'Fintech-led (StraitsX); banks exploring', 'Banking-led (HSBC, StanChart)'],
            ['Number of applicants', 'Multiple under PSA MPI regime', '36 in first round (2025–26)'],
            ['Scope', 'SGD and G10-currency SCS', 'HKD and other fiat-pegged (FRS)'],
          ]}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6" data-testid="stablecoins-edge">
          <EdgeBox
            title="SG Competitive Edge — Stablecoins"
            color="green"
            items={[
              'Framework live 2 years earlier — first-mover advantage in regulatory clarity',
              'Lower capital threshold (SGD 1M vs HKD 25M) enables broader participation',
              'XSGD already commercially live with Grab and DeFi protocols — real adoption data',
            ]}
          />
          <EdgeBox
            title="HK Competitive Edge — Stablecoins"
            color="blue"
            items={[
              'Dedicated statute (Cap. 656) provides stronger legal certainty than PSA amendment',
              'Banking majors (HSBC, StanChart) as licensed issuers: institutional trust at launch',
              '36-applicant pipeline signals strong market demand; ecosystem likely to grow rapidly post-2026',
            ]}
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 3: TOKENISED DEPOSITS */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <section id="tokenised-deposits">
        <SectionHeading id="tokenised-deposits">3. Tokenised Bank Liabilities</SectionHeading>
        <p className="text-slate-300 leading-relaxed mb-4">
          Three terms are routinely conflated, so it is worth being precise.
          A <strong className="text-slate-100">tokenised bank liability (TBL)</strong> — MAS&apos;s
          preferred umbrella term — is a token issued by a licensed bank that represents a claim
          on the bank&apos;s balance sheet; a <strong className="text-slate-100">tokenised
          deposit</strong> (HKMA&apos;s and the broader industry&apos;s term) is the same
          instrument. Both are commercial-bank money that functions as a <em>settlement asset</em>,
          and in MAS&apos;s framing they are one of the three forms of digital money alongside
          wholesale CBDC and well-regulated stablecoins. A
          <strong className="text-slate-100"> tokenised money market fund (TMMF)</strong> is a
          different animal: a tokenised share in an investment fund, not bank money, not
          deposit-protected, and measured by assets under management (AUM) rather than settlement
          throughput.<Cite id="r27" /> This section covers the bank-money instruments
          (TBLs / tokenised deposits); tokenised funds and bonds are treated under
          §5. For scale, the global TMMF market passed roughly USD 5 billion in 2026 — led by
          BlackRock&apos;s BUIDL (~USD 2.5bn AUM) and Franklin Templeton&apos;s FOBXX
          (~USD 0.7bn AUM), the latter a Project Guardian participant.
        </p>

        <SubHeading>3.1 Singapore — Project Guardian</SubHeading>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-slate-100">Project Guardian</strong>
          <Cite id="r12" /><Cite id="r13" /> is the most comprehensive multi-asset
          tokenisation programme globally. Launched in May 2022 with 11 financial institutions,
          it has expanded to over 40 institutions by 2024 and now covers fixed income, FX,
          tokenised funds, and repo collateral. On the bank-money side specifically, the FX
          workstream (with ISDA and the GFMA Global FX Division) has piloted
          <em> tokenised bank liabilities</em> for FX settlement and cross-border payments.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          Key Guardian milestones include:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-sm mb-4 pl-2">
          <li>
            First live cross-currency repo using tokenised government bonds as collateral
            (JPMorgan and DBS, November 2023)
          </li>
          <li>DvP settlement of tokenised government bonds demonstrated at scale</li>
          <li>Aave Arc integration — institutional DeFi with KYC-gated liquidity</li>
          <li>
            Franklin Templeton&apos;s FOBXX — a tokenised money market fund (~USD 0.7bn AUM) —
            tested in the SG sandbox (an investment fund, distinct from TBLs)
          </li>
          <li>
            SGD Testnet (2025) extends Guardian&apos;s scope: tokenised MAS Bills to be
            settled using wholesale CBDC on a shared ledger (2026 planned)
            <Cite id="r6" />
          </li>
        </ul>
        <p className="text-slate-300 leading-relaxed mb-3">
          Guardian&apos;s key differentiator is <em>multi-jurisdictional reach</em>: participants
          include firms from Japan, UK, Switzerland, and the US, with regulatory sandboxes
          coordinated with the Financial Conduct Authority (UK) and FINMA (Switzerland).
          MAS has also articulated the supporting infrastructure more explicitly than any other
          regulator — the <strong className="text-slate-100">Orchid Blueprint</strong>
          <Cite id="r22" /> (November 2023) and the <strong className="text-slate-100">Global
          Layer One (GL1)</strong> public-permissioned base layer
          <Cite id="r23" /> — work detailed in §5.
        </p>

        <SubHeading>3.2 Hong Kong — Project Ensemble</SubHeading>
        <p className="text-slate-300 leading-relaxed mb-3">
          Project Ensemble
          <Cite id="r2" /> is HKMA&apos;s dedicated tokenised deposit and wholesale CBDC
          sandbox. Launched in March 2024, its first live milestone — interbank tokenised
          deposit settlement between HSBC, Hang Seng, StanChart, BOCHK, and Goldman Sachs
          — was completed in September 2024. Notably, the settlement used
          <em> wCBDC as the settlement asset</em>, not commercial bank money, establishing
          the first instance of atomic DvP between tokenised deposits and tokenised bonds
          in HK.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          Project Ensemble&apos;s technology stack uses Ethereum-compatible DLT
          (Hyperledger Besu), chosen for compatibility with Mainland China&apos;s tokenisation
          infrastructure. Phase 2 (January 2025) extended testing to a
          <strong className="text-slate-100"> cross-border corridor with Mainland China</strong>,
          exploring DvP for bonds and securities across the HK–Mainland boundary — a
          structurally unique feature that no other wholesale CBDC programme can replicate.
        </p>

        <CompareTable
          headers={['Dimension', 'Singapore (Project Guardian + SGD Testnet)', 'Hong Kong (Project Ensemble)']}
          rows={[
            ['Status', <Pill color="amber">Pilot</Pill>, <Pill color="amber">Pilot</Pill>],
            ['Instrument focus', 'Tokenised bank liabilities (FX workstream) + tokenised funds/bonds', 'Tokenised deposits (interbank) + tokenised bonds'],
            ['Number of institutions', '40+ (JPM, DBS, UBS, Franklin Templeton…)', '~10 (HSBC, GS, Hashkey, etc.)'],
            ['Settlement asset', 'wCBDC (MAS SGD Testnet) + tokenised bank liabilities', 'wCBDC (HKMA)'],
            ['DvP capability', 'Yes (confirmed, multi-asset)', 'Yes (confirmed)'],
            ['Cross-border scope', 'Japan, UK, Switzerland, US (multi-jurisdictional)', 'Mainland China corridor (Phase 2)'],
            ['Standout capability', 'Cross-currency repo; institutional DeFi (Aave Arc)', 'First HK–Mainland DLT DvP link'],
            ['Technology', 'Ethereum/Polygon, JPM Onyx, Partior', 'Hyperledger Besu (EVM-compatible)'],
          ]}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6" data-testid="tokenised-deposits-edge">
          <EdgeBox
            title="SG Competitive Edge — Tokenised Bank Liabilities"
            color="green"
            items={[
              'Project Guardian has 4× more institutions — network effects are much larger',
              'Cross-currency repo capability demonstrates broader asset and currency coverage',
              'SGD Testnet tokenised MAS Bills (2026): first sovereign bond primary issuance via CBDC',
            ]}
          />
          <EdgeBox
            title="HK Competitive Edge — Tokenised Bank Liabilities"
            color="blue"
            items={[
              'China corridor DvP: first DLT settlement link between HK and Mainland banking systems',
              'wCBDC-as-settlement-asset architecture tightly integrated with e-HKD+ retail programme',
              'EVM-compatible stack designed for China interoperability (strategic alignment with PBOC)',
            ]}
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 4: CROSS-BORDER */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <section id="cross-border">
        <SectionHeading id="cross-border">4. Cross-Border Interoperability</SectionHeading>
        <p className="text-slate-300 leading-relaxed mb-4">
          Cross-border payment infrastructure is where the two cities&apos; strategic
          philosophies diverge most sharply. Singapore has built the broadest multilateral
          network; Hong Kong holds the most strategically significant single bilateral link —
          to China.
        </p>

        <SubHeading>4.1 Singapore — Multilateral Reach</SubHeading>
        <p className="text-slate-300 leading-relaxed mb-3">
          Singapore&apos;s cross-border strategy is built on breadth rather than depth.
          BIS-led and industry projects involving MAS include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm mb-4 pl-2">
          <li>
            <strong className="text-slate-100">Project Dunbar</strong>
            <Cite id="r15" /> (2021–2022) — multi-CBDC shared platform with Australia,
            Malaysia, and South Africa; concluded with publishable findings that fed into
            later multilateral wholesale-CBDC designs
          </li>
          <li>
            <strong className="text-slate-100">Project Mariana</strong> — cross-border FX
            using wCBDC with BdF and SNB (Switzerland), testing automated market makers for
            wholesale FX settlement (concluded 2023)
          </li>
          <li>
            <strong className="text-slate-100">Project Ubin+</strong>
            <Cite id="r5" /> (announced 2022) — the umbrella initiative for the cross-border
            wholesale-CBDC workstreams above (Cedar II × Ubin+, Mariana); both concluded with
            published reports in 2023, with no active workstream since
          </li>
          <li>
            <strong className="text-slate-100">Project Agorá</strong> — BIS-led initiative
            exploring integration of commercial bank tokenised deposits with central bank money
            across 7 central banks, including MAS
          </li>
          <li>
            <strong className="text-slate-100">Partior</strong>
            <Cite id="r18" /> — commercially live multi-currency settlement (SGD, USD, EUR,
            JPY) connecting banks across jurisdictions
          </li>
        </ul>

        <SubHeading>4.2 Hong Kong — mBridge & the China Link</SubHeading>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-slate-100">Project mBridge</strong>
          <Cite id="r14" /> is a multi-CBDC platform enabling real-time cross-border
          payments and FX settlement among participating central banks on a shared DLT.
          HK is a founding participant alongside the People&apos;s Bank of China (PBOC),
          the Bank of Thailand, the Central Bank of the UAE, and (from 2024) the Saudi
          Central Bank. mBridge achieved Minimum Viable Product (MVP) status in June 2024.
          Its 2022 pilot — the largest cross-border CBDC pilot to date — saw 20 commercial
          banks across four jurisdictions settle 164 payment and foreign-exchange transactions
          worth over USD 22 million over a six-week period.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-slate-200">The strategic significance of mBridge for HK is the PBOC participation.</strong>{' '}
          China&apos;s e-CNY is the most advanced major CBDC globally, and mBridge provides
          the only interoperability bridge between it and non-Mainland financial systems.
          Hong Kong is the only Western-aligned IFC inside this network. When the BIS
          withdrew from mBridge development in July 2024, the project continued under
          central bank stewardship — underscoring that this is a sovereign strategic asset,
          not merely a research exercise.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          Separately, Project Ensemble&apos;s Phase 2 cross-border DvP corridor with Mainland
          China adds a second institutional link — this time at the tokenised asset level rather
          than the payment level.
        </p>

        <CompareTable
          headers={['Project', 'SG Role', 'HK Role', 'Status']}
          rows={[
            ['Partior', 'Founding (MAS, DBS, Temasek)', 'Not a participant', <Pill color="emerald">Production</Pill>],
            ['Project Agorá', 'Participant (MAS)', 'Not a participant', <Pill color="amber">Active</Pill>],
            ['Project Dunbar', 'Lead (BIS Hub SG)', 'Not a participant', <Pill color="rose">Concluded</Pill>],
            ['Project Mariana', 'Participant (MAS)', 'Not a participant', <Pill color="rose">Concluded 2023</Pill>],
            ['Project Ubin+', 'Lead (MAS)', 'MOU partner (HKMA)', <Pill color="rose">Concluded 2023</Pill>],
            ['mBridge', 'Not a participant', 'Founding member (HKMA)', <Pill color="emerald">Production Pilot</Pill>],
            ['Ensemble cross-border', 'Not a participant', 'Lead (HKMA)', <Pill color="amber">Pilot</Pill>],
          ]}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6" data-testid="crossborder-edge">
          <EdgeBox
            title="SG Competitive Edge — Cross-Border"
            color="green"
            items={[
              'Broadest multilateral footprint: Dunbar, Mariana, Agorá, Partior across 4 continents',
              'Partior is live — not a pilot; real money, real banks, real settlement',
              'ASEAN connectivity thesis: natural hub for Southeast Asia cross-border corridors',
            ]}
          />
          <EdgeBox
            title="HK Competitive Edge — Cross-Border"
            color="blue"
            items={[
              'mBridge provides the only CBDC-to-CBDC interoperability with Chinese e-CNY',
              'Ensemble HK–Mainland corridor: first DLT DvP link between the two banking systems',
              'Strategic positioning as gateway for China-facing trade finance digitalisation',
            ]}
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 5: INTERNATIONAL STANDARDS & FRAMEWORK DEVELOPMENT */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <section id="standards">
        <SectionHeading id="standards">5. International Standards &amp; Framework Development</SectionHeading>
        <p className="text-slate-300 leading-relaxed mb-4">
          Beyond building infrastructure, both regulators have invested in the softer but
          arguably more durable work of setting the taxonomies, frameworks, and legal
          playbooks that tokenised markets will run on. Their styles diverge cleanly:
          Singapore convenes industry to <em>author reusable frameworks</em>, while Hong Kong
          tends to <em>demonstrate through repeated real-money issuance</em> and then codify the
          lessons. Notably, both have converged on the same core data standard — the ICMA
          Bond Data Taxonomy — which bodes well for eventual interoperability.
        </p>

        <SubHeading>5.1 Singapore — Convening the Framework Authors</SubHeading>
        <p className="text-slate-300 leading-relaxed mb-3">
          Under Project Guardian, MAS has convened over 40 financial institutions, industry
          associations, and international policymakers across seven jurisdictions to produce
          reference frameworks rather than one-off pilots. The flagship outputs are the
          <strong className="text-slate-100"> Guardian Fixed Income Framework (GFIF)</strong>
          <Cite id="r24" /> (2024) — an industry guide to tokenisation in debt capital markets
          that integrates ICMA&apos;s Bond Data Taxonomy, the Capital Markets and Technology
          Association&apos;s token standards, and the GFMA&apos;s Design Principles for Tokenised
          Securities — and the <strong className="text-slate-100">Guardian Funds Framework
          (GFF)</strong>, which adds the Guardian Composable Token Taxonomy for tokenised funds.
          The FX workstream, run with ISDA and the GFMA Global FX Division, is developing FX
          data specifications, risk-management frameworks, and standard documentation.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          Above the framework layer sits <strong className="text-slate-100">Global Layer One
          (GL1)</strong>
          <Cite id="r23" /> — MAS&apos;s effort, with BNY, Citi, J.P. Morgan, MUFG, and
          Société Générale-FORGE, to define a public, permissioned foundational infrastructure
          on which commercial networks can be deployed. The explicit ambition is to set the
          base-layer standard for institutional tokenised finance globally, and MAS positions
          this work for compatibility with FSB, IOSCO, and BIS norms.
        </p>

        <SubHeading>5.2 Hong Kong — Proving It with Real-Money Issuance</SubHeading>
        <p className="text-slate-300 leading-relaxed mb-3">
          HKMA&apos;s standards contribution runs through tokenised bonds. Building on
          <strong className="text-slate-100"> Project Genesis</strong> (2021, with the BIS
          Innovation Hub) — a green-bond tokenisation prototype — the HKSAR Government has
          executed repeated <em>real-money</em> issuances: an inaugural tokenised green bond in
          February 2023 (~HK$800m), and in February 2024 the world&apos;s first
          <strong className="text-slate-100"> multi-currency digital green bond</strong> of around
          HK$6 billion across HKD, RMB, USD, and EUR
          <Cite id="r25" />, settled on the CMU with HSBC Orion and cutting the settlement cycle
          from T+5 to T+1. A third digital green bond offering followed in November 2025.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          HKMA has codified the lessons through the
          <strong className="text-slate-100"> EvergreenHub</strong> digital-bond knowledge
          repository, adopted ICMA&apos;s Bond Data Taxonomy for consistent machine-readable
          term sheets, and in June 2026 convened a
          <strong className="text-slate-100"> Tokenised Bond Expert Group</strong>
          <Cite id="r26" /> to advise on enhancements to Hong Kong&apos;s legal and regulatory
          regime — complemented by the Digital Bond Grant Scheme that subsidises issuance costs.
        </p>

        <CompareTable
          headers={['Dimension', 'Singapore (MAS)', 'Hong Kong (HKMA)']}
          rows={[
            ['Core approach', 'Convene industry to author reusable frameworks', 'Demonstrate via repeated real-money issuance'],
            ['Flagship output', 'Guardian Fixed Income & Funds Frameworks', 'World-first multi-currency digital green bond; EvergreenHub'],
            ['Shared data standard', 'ICMA Bond Data Taxonomy (embedded in GFIF)', 'ICMA Bond Data Taxonomy (adopted for digital bonds)'],
            ['Industry bodies engaged', 'ICMA, ISDA, GFMA/GFXD, CMTA', 'ICMA; Tokenised Bond Expert Group (2026)'],
            ['Headline real-money milestone', 'Live cross-currency repo; tokenised funds', '~HK$6bn multi-currency digital green bond (2024)'],
            ['Base-layer standard-setting', 'Global Layer One (GL1) public-permissioned base layer', 'CMU + HSBC Orion settlement platform'],
            ['International alignment', 'FSB / IOSCO / BIS compatibility', 'BIS Innovation Hub; mBridge cross-border'],
          ]}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6" data-testid="standards-edge">
          <EdgeBox
            title="SG Competitive Edge — Standards"
            color="green"
            items={[
              'Authored the most widely-referenced tokenisation frameworks (Guardian FI & Funds)',
              'Convening power: 40+ institutions across 7 jurisdictions, plus ISDA / ICMA / GFMA',
              'GL1 aims to set the base-layer standard for institutional tokenised finance',
            ]}
          />
          <EdgeBox
            title="HK Competitive Edge — Standards"
            color="blue"
            items={[
              'Repeated real-money digital bond issuance — world-first multi-currency (~HK$6bn, 2024)',
              'EvergreenHub codifies the legal/operational playbook for digital bonds',
              'Tokenised Bond Expert Group (2026) drives concrete regulatory enhancement',
            ]}
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 6: FINTECH ECOSYSTEM */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <section id="fintech-ecosystem">
        <SectionHeading id="fintech-ecosystem">6. FinTech Ecosystems & Flagship Events</SectionHeading>
        <p className="text-slate-300 leading-relaxed mb-4">
          One of the more striking symmetries between the two city-states is that both launched
          their flagship annual fintech events in <strong className="text-slate-100">the same year — 2016</strong>.
          This was not coincidental: both events were deliberate instruments of regulatory
          signalling and talent attraction, and their trajectories since then reflect the
          cities&apos; different strategic postures.
        </p>

        <SubHeading>6.1 Singapore FinTech Festival</SubHeading>
        <p className="text-slate-300 leading-relaxed mb-3">
          The <strong className="text-slate-100">Singapore FinTech Festival (SFF)</strong>
          <Cite id="r16" /> was launched by MAS in 2016. It has grown into the
          <em> world&apos;s largest fintech event</em> by attendance, drawing
          65,000 participants from 134 countries and regions in 2024 (down marginally from
          66,000 across 150 countries in 2023). SFF is explicitly used by MAS
          as a policy announcement platform: Project Orchid was revealed at SFF 2022;
          Project Guardian milestones are regularly announced there; and the MAS Managing
          Director&apos;s annual keynote has become a closely watched policy signal for the
          global digital asset industry.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          SFF&apos;s international character — it is held in English, with a majority of
          overseas attendees — mirrors MAS&apos;s international regulatory alignment strategy.
          The co-location of BIS Innovation Hub Singapore centre announcements at SFF reinforces
          Singapore&apos;s positioning as the preferred interlocutor between Asian and
          Western regulatory frameworks.
        </p>

        <SubHeading>6.2 Hong Kong FinTech Week</SubHeading>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-slate-100">Hong Kong FinTech Week</strong>
          <Cite id="r17" /> is organised by InvestHK and launched in 2016 — the same year
          as SFF (now co-branded with StartmeupHK). Its 2024 edition drew over 37,000
          attendees from more than 100 economies, and its record 10th-anniversary edition in
          2025 exceeded 45,000. It serves as the primary venue for HKMA policy announcements
          on the e-HKD, virtual asset regulation, and cross-border payment innovation. Key
          milestones announced at HK FinTech Week include the e-HKD three-rail framework
          (2022), Project Ensemble launch details (2024), and annual mBridge updates.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          HK FinTech Week is bilingual (English and Cantonese/Mandarin), and its attendee
          profile reflects a stronger Mainland China component — consistent with HK&apos;s
          role as the primary financial gateway between China and the international financial
          system.
        </p>

        <CompareTable
          headers={['Dimension', 'Singapore FinTech Festival', 'Hong Kong FinTech Week']}
          rows={[
            ['Founded', '2016 (by MAS)', '2016 (by InvestHK)'],
            ['2024 Attendance', '65,000 from 134 countries & regions', '37,000+ from 100+ economies'],
            ['Organiser', 'Monetary Authority of Singapore', 'InvestHK (Invest Hong Kong)'],
            ['Language', 'English (primary)', 'English & Cantonese/Mandarin'],
            ['Character', 'International, Western-aligned', 'Asia-Pacific, China-facing'],
            ['Notable announcements', 'Project Orchid (2022), Guardian milestones', 'e-HKD framework (2022), mBridge updates, Ensemble'],
            ['BIS Hub linkage', 'BIS Innovation Hub Singapore — co-located announcements', 'BIS Innovation Hub Hong Kong — mBridge venue'],
          ]}
        />

        <SubHeading>6.3 Ecosystem Metrics</SubHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 mb-6">
          {[
            {
              label: 'Singapore',
              color: 'border-emerald-800',
              facts: [
                '1,000+ fintech companies headquartered',
                'MAS licensing: 200+ Major Payment Institutions',
                'BIS Innovation Hub — Singapore Centre (opened 2019)',
                'Top 5 global crypto exchange hub by volume',
                'Project Guardian: 40+ financial institutions',
              ],
            },
            {
              label: 'Hong Kong',
              color: 'border-blue-800',
              facts: [
                '800+ fintech companies',
                'HKMA: 30+ virtual asset exchange licences (2024)',
                'BIS Innovation Hub — Hong Kong Centre (opened 2019)',
                'World\'s 3rd largest financial centre (GFCI 2024)',
                'SFC virtual asset trading platform regime (2023)',
              ],
            },
          ].map((box) => (
            <div key={box.label} className={`rounded-xl border ${box.color} bg-slate-900 p-5`}>
              <p className="font-semibold text-slate-100 mb-3">{box.label}</p>
              <ul className="space-y-1.5">
                {box.facts.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-slate-500 text-xs mt-1">•</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 7: REGULATORY PHILOSOPHY */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <section id="regulatory-philosophy">
        <SectionHeading id="regulatory-philosophy">7. Regulatory Philosophy</SectionHeading>
        <p className="text-slate-300 leading-relaxed mb-4">
          Both MAS and HKMA are integrated regulators — central bank, prudential supervisor,
          and financial sector regulator in one institution. This structural similarity masks
          a meaningful difference in strategic outlook.
        </p>

        <SubHeading>7.1 MAS — Principles-Based, International First</SubHeading>
        <p className="text-slate-300 leading-relaxed mb-3">
          MAS has built its digital asset regulatory stack on principles-based frameworks
          rooted in existing statute (PSA), updated iteratively rather than through new primary
          legislation. This has given MAS speed: the stablecoin framework was finalised within
          the existing PSA structure without requiring a new Ordinance or Act. MAS&apos;s
          regulatory philosophy is explicitly non-China-centric — it seeks compatibility with
          FSB, IOSCO, and BIS frameworks, making SG the preferred domicile for global financial
          institutions that need regulatory recognition from Western supervisors.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          MAS has also been deliberate about <em>not</em> overcommitting. The retail CBDC
          (Orchid) remains explicitly exploratory — MAS has stated that no decision to launch
          a retail CBDC has been made, avoiding the political and operational risks of a
          premature commitment.
        </p>

        <SubHeading>7.2 HKMA — Banking-Conservative, China-Integrated</SubHeading>
        <p className="text-slate-300 leading-relaxed mb-3">
          HKMA has been equally thoughtful but on a different axis. Its stablecoin
          Ordinance (Cap. 656) represents a more formal legislative approach than
          MAS&apos;s PSA route, providing higher statutory certainty but requiring longer
          enactment time. HKMA&apos;s preference for banking-led issuers (HSBC, StanChart
          as the first licensees) reflects a conservative stance: systemic stability over
          ecosystem breadth.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          What makes HKMA&apos;s position uniquely complex is China: HKMA operates within
          Hong Kong&apos;s &quot;one country, two systems&quot; framework, maintaining
          monetary independence (the HKD peg to the USD) while navigating PBOC&apos;s
          digital currency agenda. Participation in mBridge and the Ensemble–Mainland
          corridor reflects HKMA&apos;s strategy of deepening China connectivity within
          the constraints of its independent monetary system.
        </p>

        <CompareTable
          headers={['Dimension', 'MAS (Singapore)', 'HKMA (Hong Kong)']}
          rows={[
            ['Regulatory style', 'Principles-based; iterative PSA amendments', 'Statute-based (Ordinances); higher legal certainty'],
            ['Speed to market', 'Faster (stablecoin framework 2 years ahead)', 'Slower; more thorough legislative process'],
            ['Issuer preference', 'Open to fintechs and banks (low capital bar)', 'Banking-led (higher capital, institutional stability)'],
            ['China alignment', 'Independent; Western-compatible frameworks', 'Integrated; PBOC interoperability via mBridge'],
            ['Retail CBDC stance', 'Explicitly exploratory; no launch commitment', 'Pilot-stage (e-HKD+); broader commitment signalled'],
            ['Wholesale CBDC stance', 'Commercialised (Partior live); SGD Testnet live', 'Sandbox-stage (Ensemble); no commercial entity yet'],
          ]}
        />
      </section>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 8: COMPETITIVE EDGE SUMMARY */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <section id="competitive-edge">
        <SectionHeading id="competitive-edge">8. Competitive Edge Summary</SectionHeading>
        <p className="text-slate-300 leading-relaxed mb-6">
          As of mid-2026, neither city-state has a decisive lead across all dimensions.
          Singapore holds a broader, deeper set of advantages in wholesale CBDC
          commercialisation and multilateral interoperability. Hong Kong holds a
          structurally unique position through its China corridor that no other
          financial centre can replicate. The two cities are competing on different
          fronts — and winning on different criteria.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" data-testid="summary-edge">
          <div className="rounded-xl border border-emerald-700 bg-slate-900 p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🇸🇬</span>
              <p className="font-bold text-slate-100 text-lg">Singapore&apos;s Edge</p>
            </div>
            <ul className="space-y-3">
              {[
                { label: 'First Mover', text: 'Stablecoin framework live 2 years earlier; Project Ubin started in 2016 — a decade of institutional knowledge' },
                { label: 'Partior', text: 'The only live, commercially operational wholesale CBDC network globally — real money, real banks, real settlement' },
                { label: 'Project Guardian', text: '40+ institutions, multi-asset, multi-jurisdiction — the largest tokenised financial asset programme in the world' },
                { label: 'Standards Authorship', text: 'Guardian Fixed Income & Funds Frameworks and GL1 — Singapore writes the rulebooks the sector references' },
                { label: 'Multilateral Reach', text: 'Dunbar, Mariana, Agorá, Partior — connections to France, Switzerland, UK, Australia, South Africa; ASEAN hub thesis' },
                { label: 'Ecosystem Depth', text: 'SFF 65,000+ attendees, 1,000+ fintechs, largest MPI licensing pipeline; XSGD live in retail DeFi' },
              ].map((item) => (
                <li key={item.label} className="text-sm text-slate-300">
                  <span className="font-semibold text-emerald-300">{item.label}: </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-blue-700 bg-slate-900 p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🇭🇰</span>
              <p className="font-bold text-slate-100 text-lg">Hong Kong&apos;s Edge</p>
            </div>
            <ul className="space-y-3">
              {[
                { label: 'China Gateway', text: 'The only Western-aligned IFC in mBridge; e-CNY interoperability link is structurally exclusive to HK' },
                { label: 'Banking Majors', text: 'HSBC, StanChart, BOCHK — the most influential global banks in Asia are HK-based, lending institutional credibility' },
                { label: 'Stablecoin Legislation', text: 'Cap. 656 provides statutory-grade legal certainty; 36-applicant pipeline is the largest stablecoin licensing queue globally' },
                { label: 'Real-Money Digital Bonds', text: 'World-first multi-currency digital green bond (~HK$6bn, 2024); repeated live issuance' },
                { label: 'Mainland DvP', text: 'Ensemble Phase 2: first HK–Mainland DLT-based delivery-versus-payment corridor' },
              ].map((item) => (
                <li key={item.label} className="text-sm text-slate-300">
                  <span className="font-semibold text-blue-300">{item.label}: </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-slate-700 bg-slate-900/50 p-5">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Bottom Line
          </p>
          <p className="text-slate-300 leading-relaxed">
            Singapore is ahead on <em>commercialisation</em> — it has turned CBDC research
            into production infrastructure (Partior), built the world&apos;s most extensive
            tokenised finance programme (Guardian), and established regulatory frameworks
            earlier. Hong Kong is ahead on <em>strategic positioning</em> — the China corridor
            via mBridge and Project Ensemble is an asymmetric advantage that positions HK as
            the indispensable bridge between the world&apos;s largest CBDC ecosystem (China)
            and the international financial system. Which city wins the decade likely depends
            on a single macro question: does China&apos;s digital currency ecosystem integrate
            with or diverge from the global financial system? If integration, Hong Kong&apos;s
            position becomes enormously valuable. If divergence, Singapore&apos;s Western-facing
            multilateral network becomes the more resilient bet.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 9: ANALYSIS — SCENARIOS FOR THE DECADE AHEAD */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <section id="analysis">
        <SectionHeading id="analysis">9. Analysis: Scenarios for the Decade Ahead</SectionHeading>
        <div className="mb-5 rounded-lg border border-slate-700 bg-slate-900/40 px-4 py-3 text-sm text-slate-400 italic">
          The preceding sections describe what each city-state has built. This section is the
          analyst&apos;s own interpretation. It deliberately does <strong className="text-slate-300 not-italic">not</strong> declare
          a winner, and it takes no view on whether a China-centred or a US-centred financial
          order is preferable — the aim is to map how the same facts could play out under
          materially different futures.
        </div>
        <p className="text-slate-300 leading-relaxed mb-4">
          Read as a head-to-head race, the Singapore–Hong Kong contest invites a verdict. Read
          more carefully, it resists one — because the outcome depends less on what either
          regulator does next than on two structural questions that sit largely outside their
          control. Rather than forecast a winner, the more defensible exercise is to isolate
          those questions, treat them as axes of uncertainty, and ask where each city lands
          under each combination.
        </p>

        <SubHeading>9.1 The Two Decisive Uncertainties</SubHeading>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-slate-100">Axis A — China connectivity.</strong> Does
          China&apos;s digital-currency ecosystem — e-CNY domestically and Project mBridge
          <Cite id="r14" /> across borders — ultimately <em>integrate</em> with the wider
          international financial system, or <em>decouple</em> from it into a parallel bloc?
          This is not a question of whether one outcome is desirable; both integration and
          decoupling are plausible end-states with large, opposing consequences for any
          financial centre positioned between China and the rest of the world.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-slate-100">Axis B — public vs. private rails.</strong> Does
          cross-border value increasingly settle over <em>public</em> rails — wholesale CBDC and
          multi-CBDC networks — or over <em>private</em> regulated instruments: tokenised bank
          deposits and fiat-referenced stablecoins, a large share of them US-dollar
          denominated? Each rail type has a credible path to dominance, and each carries its own
          fragility: public rails depend on inter-central-bank cooperation that geopolitics can
          interrupt, while private dollar rails depend on continued regulatory tolerance and on
          the dollar&apos;s reach, both of which are contested.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          Crossing the two axes yields four scenarios. They are not predictions, and their
          probabilities are not estimated here; they are a frame for testing how durable each
          city&apos;s position is.
        </p>

        <SubHeading>9.2 Four Scenarios</SubHeading>
        <CompareTable
          headers={['Scenario', 'Driving combination', 'Where Singapore fits', 'Where Hong Kong fits']}
          rows={[
            [
              <><Pill color="emerald">Multilateral Integration</Pill></>,
              'China integrates · public CBDC rails lead',
              'Standards-authorship (Guardian, GL1) and a live wholesale network become the connective tissue linking blocs.',
              'The China corridor turns into a premium asset: the regulated on-ramp between the largest CBDC ecosystem and global markets.',
            ],
            [
              <><Pill color="indigo">Dollar Tokenisation</Pill></>,
              'China integrates · private USD / deposit rails lead',
              'Breadth across stablecoins, tokenised deposits and Western-aligned frameworks pays off; the corridor matters less than rail neutrality.',
              'Bank-led stablecoin licensing and real-money digital bonds stay relevant; the China-gateway premium compresses.',
            ],
            [
              <><Pill color="rose">Bifurcation</Pill></>,
              'China decouples · public CBDC rails lead',
              'Anchors the non-China multilateral bloc; its frameworks govern one side of a divided system.',
              'Becomes the translation layer between two blocs — structurally valuable but politically exposed to both.',
            ],
            [
              <><Pill color="amber">Fragmented Standoff</Pill></>,
              'China decouples · private USD / deposit rails lead',
              'Neutral standards-authorship is a hedge against fragmentation, but reach is capped by the divide.',
              'Dual-system optionality is a hedge, but caught between a decoupled China and dollar-denominated private rails.',
            ],
          ]}
        />
        <p className="text-slate-300 leading-relaxed mb-4">
          The pattern across all four is the same in one respect: in none of them does a single
          city simply &quot;win.&quot; What changes is the <em>shape</em> of the niche each
          occupies. Singapore&apos;s position is most naturally read as a neutral
          standards-and-commercialisation layer; Hong Kong&apos;s as a China-facing settlement
          gateway. The scenarios re-price those niches — they do not collapse them into a single
          scoreboard.
        </p>

        <SubHeading>9.3 Cross-Cutting Risks</SubHeading>
        <p className="text-slate-300 leading-relaxed mb-4">
          Each city&apos;s strength is also the source of its sharpest risk, and the two risk
          profiles are best read side by side rather than ranked.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <EdgeBox
            title="Singapore — Key Risks"
            color="green"
            items={[
              'Commercialisation-first can become a "winner’s curse" if the standards it has authored fragment into competing regional variants',
              'Its frameworks (Guardian, GL1) only matter if others adopt them — influence is borrowed from the market, not guaranteed',
              'The post-2020 inflow of talent and capital from Hong Kong could slow or reverse if conditions normalise',
            ]}
          />
          <EdgeBox
            title="Hong Kong — Key Risks"
            color="blue"
            items={[
              'The China corridor is high-beta: large upside if integration deepens, but exposed to sanctions risk and one-country-two-systems trajectory',
              'The USD peg constrains monetary-rail flexibility even as it provides stability',
              'Concentration in a handful of banking majors (HSBC, StanChart, BOCHK) narrows the base of its digital-asset ecosystem',
            ]}
          />
        </div>
        <p className="text-slate-300 leading-relaxed mb-4">
          Both also share an exogenous risk that cuts beneath the rivalry entirely: if regulated
          stablecoins and tokenised bank deposits scale faster than either public CBDC
          programme, the centre of gravity in digital money could shift toward private rails —
          making <em>both</em> cities&apos; CBDC investments less central than today&apos;s
          framing assumes. That pressure is symmetric; it favours neither a China-led nor a
          US-led outcome on its own.
        </p>

        <SubHeading>9.4 Leading Indicators to Watch</SubHeading>
        <p className="text-slate-300 leading-relaxed mb-3">
          Because the decisive variables are exogenous, the most useful posture is to track
          falsifiable signals rather than to forecast. Over 2026&ndash;2030, the following would
          move the picture:
        </p>
        <ul className="space-y-2 mb-2">
          {[
            'Whether Project mBridge moves from pilot to production with live cross-border value — and whether its non-China members stay in or step back',
            'Whether Partior-style commercial wholesale networks attract issuers beyond their founding banks, proving the model generalises',
            'Whether regulators outside Asia adopt the Guardian / GL1 frameworks — the test of a genuine global standard versus a regional one',
            'The relative volume of regulated stablecoin issuance under Hong Kong’s Cap. 656 versus Singapore’s PSA regime, and whether it skews to USD or local-currency issuance',
            'The net direction of fintech-HQ and talent flows between the two cities',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="mt-1 text-xs text-indigo-400">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-xl border border-slate-700 bg-slate-900/50 p-5" data-testid="analysis-take">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Analyst&apos;s Take
          </p>
          <p className="text-slate-300 leading-relaxed">
            The most defensible reading is that this is specialisation rather than a single
            race. Across the plausible futures above, the likely outcome is a division of
            labour — Singapore as a neutral standards-and-commercialisation layer, Hong Kong as
            a China-facing settlement gateway — with the balance between them set largely by
            forces neither regulator controls: whether China&apos;s digital-money ecosystem
            integrates or decouples, and whether value settles over public or private rails.
            Those forces will be shaped by geopolitics between the major blocs, not by Marina
            Bay or Central. A confident verdict today would therefore say more about which
            geopolitical assumption the author has smuggled in than about the merits of either
            city. The honest conclusion is conditional — and deliberately takes no side on which
            global financial order ought to prevail.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* REFERENCES */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <section id="references" className="mt-14">
        <SectionHeading id="references">References</SectionHeading>
        <ol className="space-y-3" data-testid="references-list">
          {Object.entries(REFS).map(([id, ref], i) => (
            <li key={id} id={`ref-${id}`} className="flex gap-3 text-sm text-slate-400">
              <span className="font-mono text-slate-600 shrink-0 w-6 text-right">[{i + 1}]</span>
              <span>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  {ref.title}
                </a>
                {' '}— {ref.publisher}, {ref.year}.
              </span>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
