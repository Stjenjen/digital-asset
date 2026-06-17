'use client';

import { clsx } from 'clsx';
import type { Region } from '@/types';
import { ALL_REGIONS } from '@/constants/regions';

type Props = {
  selected: Region[];
  onChange: (regions: Region[]) => void;
};

const ALL = 'All' as const;

export function RegionFilter({ selected, onChange }: Props) {
  const isAll = selected.length === 0;

  function toggle(region: Region) {
    if (selected.includes(region)) {
      onChange(selected.filter((r) => r !== region));
    } else {
      onChange([...selected, region]);
    }
  }

  return (
    <div data-testid="region-filter" className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange([])}
        className={clsx(
          'px-3 py-1.5 rounded-full text-xs font-medium transition-colors',
          isAll
            ? 'bg-indigo-600 text-white'
            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
        )}
      >
        All Regions
      </button>
      {ALL_REGIONS.map((region) => (
        <button
          key={region}
          onClick={() => toggle(region)}
          className={clsx(
            'px-3 py-1.5 rounded-full text-xs font-medium transition-colors',
            selected.includes(region)
              ? 'bg-indigo-600 text-white'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          )}
        >
          {region}
        </button>
      ))}
    </div>
  );
}
