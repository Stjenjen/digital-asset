import { PageHeader } from '@/components/layout/PageHeader';
import { GLOSSARY } from '@/constants/glossary';

const CATEGORY_LABELS: Record<string, string> = {
  cbdc: 'CBDC',
  stablecoin: 'Stablecoins',
  tokenisation: 'Tokenisation',
  interop: 'Interoperability',
  general: 'General',
};

const CATEGORY_ORDER = ['cbdc', 'stablecoin', 'tokenisation', 'interop', 'general'];

export default function GlossaryPage() {
  const byCategory = CATEGORY_ORDER.map((cat) => ({
    cat,
    entries: GLOSSARY.filter((e) => e.category === cat).sort((a, b) =>
      a.term.localeCompare(b.term)
    ),
  }));

  return (
    <div className="space-y-10 max-w-3xl">
      <PageHeader
        title="Glossary"
        subtitle="Plain-English definitions for technical terms used throughout the platform"
      />

      {byCategory.map(({ cat, entries }) =>
        entries.length === 0 ? null : (
          <section key={cat}>
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {CATEGORY_LABELS[cat]}
            </h2>
            <dl className="space-y-5">
              {entries.map((entry) => (
                <div key={entry.term} id={entry.term.toLowerCase().replace(/\s+/g, '-')}>
                  <dt className="text-sm font-semibold text-indigo-300">{entry.term}</dt>
                  <dd className="mt-1 text-sm text-slate-400 leading-relaxed">{entry.definition}</dd>
                </div>
              ))}
            </dl>
          </section>
        )
      )}
    </div>
  );
}
