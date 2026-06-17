'use client';

import { useState, useEffect, useCallback } from 'react';
import { Search, X } from 'lucide-react';

type Props = {
  placeholder?: string;
  onSearch: (query: string) => void;
  className?: string;
};

export function SearchBar({ placeholder = 'Search…', onSearch, className }: Props) {
  const [value, setValue] = useState('');

  const debounced = useCallback(
    (() => {
      let timer: ReturnType<typeof setTimeout>;
      return (q: string) => {
        clearTimeout(timer);
        timer = setTimeout(() => onSearch(q), 250);
      };
    })(),
    [onSearch]
  );

  useEffect(() => {
    debounced(value);
  }, [value, debounced]);

  return (
    <div className={`relative flex items-center ${className ?? ''}`} data-testid="search-bar">
      <Search className="absolute left-3 w-4 h-4 text-slate-400 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-9 pr-8 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      />
      {value && (
        <button
          onClick={() => setValue('')}
          className="absolute right-2 text-slate-500 hover:text-slate-300"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
