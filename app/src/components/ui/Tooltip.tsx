'use client';

import { useState, useRef, useCallback } from 'react';
import { clsx } from 'clsx';

type TooltipPos = { top: number; left: number };

type Props = {
  content: string;
  children: React.ReactNode;
  className?: string;
};

export function Tooltip({ content, children, className }: Props) {
  const [pos, setPos] = useState<TooltipPos | null>(null);
  const ref = useRef<HTMLSpanElement>(null);

  // Use fixed positioning so the popup escapes any overflow:auto/hidden ancestor
  const show = useCallback(() => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      top: rect.top - 8,                  // 8px gap above the trigger
      left: rect.left + rect.width / 2,   // horizontally centred on trigger
    });
  }, []);

  const hide = useCallback(() => setPos(null), []);

  return (
    <span
      ref={ref}
      className={clsx('inline-flex items-center gap-0.5 cursor-help group', className)}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      tabIndex={0}
    >
      {children}
      <span className="text-slate-600 group-hover:text-indigo-400 text-xs transition-colors">ⓘ</span>
      {pos !== null && (
        <span
          role="tooltip"
          className="fixed z-[9999] w-64 rounded-lg bg-slate-800 border border-slate-700 px-3 py-2.5 text-xs text-slate-200 leading-relaxed shadow-xl pointer-events-none -translate-x-1/2 -translate-y-full"
          style={{ top: pos.top, left: pos.left }}
        >
          {content}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
        </span>
      )}
    </span>
  );
}
