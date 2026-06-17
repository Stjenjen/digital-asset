import { StatusBadge } from '@/components/ui/StatusBadge';
import type { TimelineEvent } from '@/types';

type Props = { events: TimelineEvent[] };

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

export function Timeline({ events }: Props) {
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <ol className="relative border-l border-slate-700 ml-3 space-y-6" data-testid="timeline">
      {sorted.map((event, i) => (
        <li key={i} className="ml-4">
          <div className="absolute -left-1.5 mt-1.5 w-3 h-3 rounded-full bg-slate-600 border-2 border-slate-900" />
          <time className="text-xs text-slate-500 font-mono">{formatDate(event.date)}</time>
          <p className="mt-0.5 text-sm text-slate-300">{event.description}</p>
          {event.status && (
            <StatusBadge status={event.status} size="sm" className="mt-1" />
          )}
        </li>
      ))}
    </ol>
  );
}
