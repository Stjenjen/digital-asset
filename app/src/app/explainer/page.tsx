import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { EXPLAINER_SECTIONS, COMPARISON_ROWS } from '@/constants/explainer';
import {
  WCBDCDiagram,
  RetailCBDCDiagram,
  StablecoinDiagram,
  TokenisedDepositDiagram,
  TokenisedRWADiagram,
} from '@/components/explainer/AssetDiagram';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

const DIAGRAMS: Record<string, ReactNode> = {
  wcbdc: <WCBDCDiagram className="w-full" />,
  'retail-cbdc': <RetailCBDCDiagram className="w-full" />,
  stablecoins: <StablecoinDiagram className="w-full" />,
  'tokenised-deposits': <TokenisedDepositDiagram className="w-full" />,
  'tokenised-rwas': <TokenisedRWADiagram className="w-full" />,
};

export default function ExplainerPage() {
  return (
    <div className="flex gap-10 items-start">
      {/* Sticky sidebar TOC */}
      <aside className="hidden lg:block w-52 shrink-0 sticky top-8">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Contents</p>
        <nav className="space-y-1">
          {EXPLAINER_SECTIONS.map((s) => (
            <div key={s.id}>
              <a
                href={`#${s.id}`}
                className="block text-sm text-slate-400 hover:text-indigo-300 transition-colors py-0.5 leading-snug"
              >
                {s.title}
              </a>
              {s.subsections?.map((sub) => (
                <a
                  key={sub.id}
                  href={`#${sub.id}`}
                  className="block text-xs text-slate-500 hover:text-slate-300 transition-colors py-0.5 pl-3 leading-snug"
                >
                  {sub.title}
                </a>
              ))}
            </div>
          ))}
          <a
            href="#comparison"
            className="block text-sm text-slate-400 hover:text-indigo-300 transition-colors py-0.5 leading-snug"
          >
            How they compare
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 min-w-0 space-y-14">
        <PageHeader
          title="Digital Money Explainer"
          subtitle="A plain-English guide to CBDCs, stablecoins, and tokenised assets — what they are, how they work, and how they differ"
        />

        {EXPLAINER_SECTIONS.map((section) => (
          <article key={section.id} id={section.id} className="scroll-mt-6">
            <h2 className="text-xl font-bold text-slate-100 mb-1">{section.title}</h2>
            <p className="text-sm font-semibold text-indigo-300 mb-4 leading-snug">{section.lead}</p>

            {/* Diagram */}
            {DIAGRAMS[section.id] && (
              <div className="mb-6 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-5 overflow-hidden">
                {DIAGRAMS[section.id]}
              </div>
            )}

            <div className="space-y-3">
              {section.body.map((para, i) => (
                <p key={i} className="text-sm text-slate-400 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Subsections */}
            {section.subsections && (
              <div className="mt-6 space-y-6 pl-4 border-l border-slate-800">
                {section.subsections.map((sub) => (
                  <div key={sub.id} id={sub.id} className="scroll-mt-6">
                    <h3 className="text-base font-semibold text-slate-200 mb-2">{sub.title}</h3>
                    <div className="space-y-2">
                      {sub.body.map((para, i) => (
                        <p key={i} className="text-sm text-slate-400 leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                    {sub.examples.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {sub.examples.map((ex) => (
                          <span
                            key={ex}
                            className="px-2 py-0.5 rounded text-xs bg-slate-800 text-slate-300 border border-slate-700"
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Examples & see-also */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {section.examples.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-xs text-slate-500 self-center">Key examples:</span>
                  {section.examples.map((ex) => (
                    <span
                      key={ex}
                      className="px-2 py-0.5 rounded text-xs bg-indigo-950/60 text-indigo-300 border border-indigo-800/40"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              )}
              {section.trackerHref && (
                <Link
                  href={section.trackerHref}
                  className="ml-auto flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors shrink-0"
                >
                  {section.trackerLabel}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>

            <hr className="mt-10 border-slate-800" />
          </article>
        ))}

        {/* Comparison table */}
        <section id="comparison" className="scroll-mt-6">
          <h2 className="text-xl font-bold text-slate-100 mb-1">How they compare</h2>
          <p className="text-sm text-slate-400 mb-6">
            Side-by-side summary of the five main digital money instruments.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-left">
                  {['Asset', 'Issuer', 'Backed by', 'Who holds it', 'Finality', 'Regulated?', 'Key risk'].map(
                    (h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wide border-b border-slate-800 whitespace-nowrap"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.asset}
                    className={i % 2 === 0 ? 'bg-slate-950' : 'bg-slate-900/40'}
                  >
                    <td className="px-4 py-3 font-semibold text-slate-200 whitespace-nowrap">{row.asset}</td>
                    <td className="px-4 py-3 text-slate-400 whitespace-nowrap">{row.issuer}</td>
                    <td className="px-4 py-3 text-slate-400">{row.backedBy}</td>
                    <td className="px-4 py-3 text-slate-400">{row.whoHoldsIt}</td>
                    <td className="px-4 py-3 text-slate-400 whitespace-nowrap">{row.finality}</td>
                    <td className="px-4 py-3 text-slate-400">{row.regulated}</td>
                    <td className="px-4 py-3 text-slate-400">{row.keyRisk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
