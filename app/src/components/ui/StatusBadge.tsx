import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import type { InitiativeStatus } from '@/types';

const badge = cva('inline-flex items-center rounded-full font-medium whitespace-nowrap', {
  variants: {
    size: {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-xs',
    },
    status: {
      Research: 'bg-slate-700 text-slate-200',
      Consultation: 'bg-blue-900 text-blue-200',
      PoC: 'bg-purple-900 text-purple-200',
      Pilot: 'bg-amber-900 text-amber-200',
      'Production Pilot': 'bg-orange-900 text-orange-200',
      Live: 'bg-green-900 text-green-200',
      Suspended: 'bg-red-900 text-red-200',
      Cancelled: 'bg-red-950 text-red-400',
    },
  },
  defaultVariants: { size: 'md' },
});

type Props = {
  status: InitiativeStatus;
  size?: 'sm' | 'md';
  className?: string;
};

export function StatusBadge({ status, size = 'md', className }: Props) {
  return (
    <span
      data-testid="status-badge"
      className={clsx(badge({ size, status }), className)}
    >
      {status}
    </span>
  );
}
