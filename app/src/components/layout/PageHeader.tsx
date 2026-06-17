type Props = {
  title: string;
  subtitle?: string;
  flag?: string;
  badge?: React.ReactNode;
};

export function PageHeader({ title, subtitle, flag, badge }: Props) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        {flag && <span className="text-4xl leading-none">{flag}</span>}
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl font-bold text-slate-100">{title}</h1>
            {badge}
          </div>
          {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
