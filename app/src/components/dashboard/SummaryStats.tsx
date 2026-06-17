type Stat = { label: string; value: number | string; sub?: string };

type Props = { stats: Stat[] };

export function SummaryStats({ stats }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl bg-slate-900 border border-slate-800 px-5 py-4"
          data-testid="summary-stat"
        >
          <div className="text-2xl font-bold text-indigo-400">{s.value}</div>
          <div className="mt-0.5 text-xs font-medium text-slate-300">{s.label}</div>
          {s.sub && <div className="mt-0.5 text-xs text-slate-600">{s.sub}</div>}
        </div>
      ))}
    </div>
  );
}
