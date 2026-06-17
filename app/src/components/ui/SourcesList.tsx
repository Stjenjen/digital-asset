'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import type { Source } from '@/types';

type Props = { sources: Source[] };

export function SourcesList({ sources }: Props) {
  const [open, setOpen] = useState(false);

  if (sources.length === 0) return null;

  return (
    <div className="mt-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors"
        data-testid="sources-toggle"
      >
        {open ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        {sources.length} source{sources.length !== 1 ? 's' : ''}
      </button>
      {open && (
        <ul className="mt-2 space-y-1.5" data-testid="sources-list">
          {sources.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-xs">
              <span className="mt-0.5 shrink-0 px-1.5 py-0.5 rounded bg-slate-700 text-slate-400 capitalize">
                {s.type}
              </span>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1"
              >
                {s.title} — {s.publisher}
                {s.date && <span className="text-slate-500 ml-1">({s.date.slice(0, 4)})</span>}
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
