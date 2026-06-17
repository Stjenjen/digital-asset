import Link from 'next/link';
import { clsx } from 'clsx';

type NavItem = { label: string; href: string };

type Props = {
  items: NavItem[];
  activeHref: string;
};

export function SectionNav({ items, activeHref }: Props) {
  return (
    <nav className="flex items-center gap-1 border-b border-slate-800 pb-px" data-testid="section-nav">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={clsx(
            'px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px',
            activeHref === item.href
              ? 'border-indigo-500 text-indigo-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
