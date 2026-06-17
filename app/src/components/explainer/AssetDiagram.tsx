'use client';

type DiagramProps = { className?: string };

// Shared styles
const BOX_ACCENT = { fill: '#1e1b4b', stroke: '#6366f1', strokeWidth: 1.5 } as const;
const BOX_DIM = { fill: '#0f172a', stroke: '#334155', strokeWidth: 1.5 } as const;
const BOX_BLUE = { fill: '#0c1a2e', stroke: '#2563eb', strokeWidth: 1.5, strokeDasharray: '5 3' } as const;
const BOX_GREEN = { fill: '#0a1f12', stroke: '#16a34a', strokeWidth: 1.5 } as const;

function Box({
  x, y, w = 110, h = 44, label, sub, style,
}: {
  x: number; y: number; w?: number; h?: number;
  label: string; sub?: string;
  style?: React.SVGProps<SVGRectElement>;
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={8} {...style} />
      <text
        x={x + w / 2} y={sub ? y + h / 2 - 5 : y + h / 2 + 4}
        textAnchor="middle" dominantBaseline="middle"
        fill={style?.stroke === '#6366f1' ? '#a5b4fc' : style?.stroke === '#2563eb' ? '#93c5fd' : '#cbd5e1'}
        fontSize={11} fontWeight={600}
      >
        {label}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 10} textAnchor="middle" fill="#64748b" fontSize={9}>
          {sub}
        </text>
      )}
    </g>
  );
}

function HArrow({ x1, y, x2, label, id }: { x1: number; y: number; x2: number; label?: string; id: string }) {
  const mx = (x1 + x2) / 2;
  return (
    <g>
      <defs>
        <marker id={id} markerWidth={8} markerHeight={6} refX={7} refY={3} orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#4f46e5" />
        </marker>
      </defs>
      <line x1={x1} y1={y} x2={x2 - 1} y2={y} stroke="#4f46e5" strokeWidth={1.5} markerEnd={`url(#${id})`} />
      {label && (
        <text x={mx} y={y - 6} textAnchor="middle" fill="#6366f1" fontSize={9}>
          {label}
        </text>
      )}
    </g>
  );
}

function VArrow({ x, y1, y2, label, id }: { x: number; y1: number; y2: number; label?: string; id: string }) {
  return (
    <g>
      <defs>
        <marker id={id} markerWidth={8} markerHeight={6} refX={7} refY={3} orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#4f46e5" />
        </marker>
      </defs>
      <line x1={x} y1={y1} x2={x} y2={y2 - 1} stroke="#4f46e5" strokeWidth={1.5} markerEnd={`url(#${id})`} />
      {label && (
        <text x={x + 6} y={(y1 + y2) / 2} dominantBaseline="middle" fill="#6366f1" fontSize={9}>
          {label}
        </text>
      )}
    </g>
  );
}

// ── Wholesale CBDC ────────────────────────────────────────────────────────────
// Central Bank → Commercial Banks → Shared Ledger (simple 3-box horizontal)
export function WCBDCDiagram({ className }: DiagramProps) {
  return (
    <svg viewBox="0 0 480 90" className={className} role="img" aria-label="Wholesale CBDC flow">
      <Box x={10} y={23} label="Central Bank" sub="Issues wCBDC" style={BOX_ACCENT} />
      <HArrow x1={120} y={45} x2={180} label="reserves" id="wcbdc-a1" />
      <Box x={180} y={23} label="Commercial Banks" sub="Participants" style={BOX_DIM} />
      <HArrow x1={290} y={45} x2={350} label="settle" id="wcbdc-a2" />
      <Box x={350} y={15} w={120} h={60} label="Shared Ledger" sub="Atomic · DvP · PvP" style={BOX_BLUE} />
      <text x={240} y={82} textAnchor="middle" fill="#475569" fontSize={9}>
        Permissioned — financial institutions only
      </text>
    </svg>
  );
}

// ── Retail CBDC ───────────────────────────────────────────────────────────────
// Central Bank → Banks/PSPs → Public  (clean top-down tree, all arrows point downward)
export function RetailCBDCDiagram({ className }: DiagramProps) {
  // All lines flow downward — no reverse markers needed
  return (
    <svg viewBox="0 0 480 180" className={className} role="img" aria-label="Retail CBDC two-tier model">
      <defs>
        <marker id="rcbdc-tip" markerWidth={8} markerHeight={6} refX={7} refY={3} orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#4f46e5" />
        </marker>
      </defs>

      {/* Central Bank — top center */}
      <Box x={185} y={8} label="Central Bank" sub="Issues CBDC" style={BOX_ACCENT} />

      {/* Vertical trunk down from Central Bank bottom (y=52) to branch y=72 */}
      <line x1={240} y1={52} x2={240} y2={72} stroke="#4f46e5" strokeWidth={1.5} />
      {/* Horizontal branch at y=72 from x=135 to x=345 */}
      <line x1={135} y1={72} x2={345} y2={72} stroke="#4f46e5" strokeWidth={1.5} />
      {/* Drop arrows from branch down into Bank/PSP boxes (top at y=82) */}
      <line x1={135} y1={72} x2={135} y2={80} stroke="#4f46e5" strokeWidth={1.5} markerEnd="url(#rcbdc-tip)" />
      <line x1={345} y1={72} x2={345} y2={80} stroke="#4f46e5" strokeWidth={1.5} markerEnd="url(#rcbdc-tip)" />
      <text x={240} y={68} textAnchor="middle" fill="#6366f1" fontSize={9}>Tier 1</text>

      {/* Bank / PSP tier */}
      <Box x={75}  y={82} label="Bank / PSP" sub="Distributor" style={BOX_DIM} />
      <Box x={290} y={82} label="Bank / PSP" sub="Distributor" style={BOX_DIM} />

      {/* Arrows down to wallets */}
      <line x1={135} y1={126} x2={135} y2={136} stroke="#4f46e5" strokeWidth={1.5} markerEnd="url(#rcbdc-tip)" />
      <line x1={345} y1={126} x2={345} y2={136} stroke="#4f46e5" strokeWidth={1.5} markerEnd="url(#rcbdc-tip)" />
      <text x={240} y={133} textAnchor="middle" fill="#6366f1" fontSize={9}>Tier 2</text>

      {/* Public Wallets */}
      <Box x={60}  y={138} w={150} h={30} label="Public Wallets" style={BOX_DIM} />
      <Box x={270} y={138} w={150} h={30} label="Public Wallets" style={BOX_DIM} />

      <text x={240} y={178} textAnchor="middle" fill="#475569" fontSize={9}>
        Central bank never deals directly with the public
      </text>
    </svg>
  );
}

// ── Stablecoins ───────────────────────────────────────────────────────────────
// Reserves → Issuer ←→ Token → Anyone  (linear)
export function StablecoinDiagram({ className }: DiagramProps) {
  return (
    <svg viewBox="0 0 548 90" className={className} role="img" aria-label="Stablecoin mechanics">
      <Box x={10}  y={23} w={100} h={44} label="Reserves" sub="USD / T-bills" style={BOX_BLUE} />
      <HArrow x1={110} y={45} x2={170} label="backs 1:1" id="sc-a1" />
      <Box x={170} y={23} label="Issuer" sub="e.g. Circle" style={BOX_ACCENT} />
      <HArrow x1={280} y={45} x2={340} label="mints" id="sc-a2" />
      <Box x={340} y={23} w={90} h={44} label="$USDC" sub="digital token" style={BOX_ACCENT} />
      <HArrow x1={430} y={45} x2={448} id="sc-a3" />
      <Box x={448} y={23} w={90} h={44} label="Anyone" sub="can hold & use" style={BOX_DIM} />
      <text x={274} y={82} textAnchor="middle" fill="#475569" fontSize={9}>
        Peg maintained by 1-for-1 redemption guarantee
      </text>
    </svg>
  );
}

// ── Tokenised Deposits ────────────────────────────────────────────────────────
// Bank Deposit → Token on DLT → Atomic DvP settlement
export function TokenisedDepositDiagram({ className }: DiagramProps) {
  return (
    <svg viewBox="0 0 480 100" className={className} role="img" aria-label="Tokenised deposit flow">
      <Box x={10}  y={28} label="Bank Deposit" sub="insured liability" style={BOX_DIM} />
      <HArrow x1={120} y={50} x2={175} label="tokenise" id="td-a1" />
      <Box x={175} y={28} label="Deposit Token" sub="on DLT" style={BOX_ACCENT} />
      <HArrow x1={285} y={50} x2={340} label="settles" id="td-a2" />
      <Box x={340} y={10} w={130} h={80} label="Atomic DvP" sub="Bond ↕ Cash" style={BOX_BLUE} />
      {/* Insured badge */}
      <rect x={10} y={78} width={160} height={18} rx={5} {...BOX_GREEN} />
      <text x={90} y={87} dominantBaseline="middle" textAnchor="middle" fill="#86efac" fontSize={9}>
        ✓ Deposit insured (FSCS / DGSD)
      </text>
      <text x={240} y={98} textAnchor="middle" fill="#475569" fontSize={9}>
        Still a bank liability — not new money creation
      </text>
    </svg>
  );
}

// ── Tokenised RWAs ────────────────────────────────────────────────────────────
// Real Asset → SPV wraps → Token → split to 3 investors
export function TokenisedRWADiagram({ className }: DiagramProps) {
  return (
    <svg viewBox="0 0 480 110" className={className} role="img" aria-label="Tokenised RWA structure">
      <defs>
        <marker id="rwa-tip" markerWidth={8} markerHeight={6} refX={7} refY={3} orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#4f46e5" />
        </marker>
      </defs>
      <Box x={10} y={33} w={110} h={44} label="Real Asset" sub="Bond / Property" style={BOX_BLUE} />
      <HArrow x1={120} y={55} x2={175} label="wrapped" id="rwa-a1" />
      <Box x={175} y={33} label="Token" sub="on-chain" style={BOX_ACCENT} />
      {/* Fan out to 3 investors */}
      <line x1={285} y1={55} x2={320} y2={55} stroke="#4f46e5" strokeWidth={1.5} />
      <line x1={320} y1={20} x2={320} y2={90} stroke="#4f46e5" strokeWidth={1.5} />
      <line x1={320} y1={20} x2={345} y2={20} stroke="#4f46e5" strokeWidth={1.5} markerEnd="url(#rwa-tip)" />
      <line x1={320} y1={55} x2={345} y2={55} stroke="#4f46e5" strokeWidth={1.5} markerEnd="url(#rwa-tip)" />
      <line x1={320} y1={90} x2={345} y2={90} stroke="#4f46e5" strokeWidth={1.5} markerEnd="url(#rwa-tip)" />
      <Box x={345} y={8}  w={120} h={24} label="Investor A" style={BOX_DIM} />
      <Box x={345} y={43} w={120} h={24} label="Investor B" style={BOX_DIM} />
      <Box x={345} y={78} w={120} h={24} label="Investor C" style={BOX_DIM} />
      <text x={240} y={106} textAnchor="middle" fill="#475569" fontSize={9}>
        Fractional ownership · T+0 atomic settlement vs T+2 traditional
      </text>
    </svg>
  );
}
