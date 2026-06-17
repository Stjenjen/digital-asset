'use client';

import { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { geoEquirectangular, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import type { FeatureCollection, Geometry } from 'geojson';
import { getAllCBDCInitiatives } from '@/data/cbdc';
import {
  getJurisdictionDisplayName,
  getJurisdictionFlag,
  getJurisdictionRegion,
} from '@/lib/jurisdiction-utils';
import { ISO_TO_JURISDICTION } from '@/lib/iso-map';
import { StatusBadge } from '@/components/ui/StatusBadge';
import type { InitiativeStatus, Region } from '@/types';
import type { CBDCInitiative } from '@/types/cbdc';

// ── Map geometry ─────────────────────────────────────────────────────────────

const WIDTH = 960;
const HEIGHT = 440;

// eslint-disable-next-line @typescript-eslint/no-require-imports
const worldTopo = require('world-atlas/countries-110m.json');

const projection = geoEquirectangular()
  .scale(153)
  .translate([WIDTH / 2, HEIGHT / 2 + 20]);

const pathGen = geoPath(projection);

// ── Status colours & ordering ────────────────────────────────────────────────

const STATUS_PRIORITY: InitiativeStatus[] = [
  'Live',
  'Production Pilot',
  'Pilot',
  'PoC',
  'Consultation',
  'Research',
  'Suspended',
  'Cancelled',
];

const STATUS_FILL: Record<InitiativeStatus, string> = {
  Live:               '#15803d',
  'Production Pilot': '#c2410c',
  Pilot:              '#b45309',
  PoC:                '#7e22ce',
  Consultation:       '#1d4ed8',
  Research:           '#475569',
  Suspended:          '#991b1b',
  Cancelled:          '#450a0a',
};

const STATUS_LABELS: Record<InitiativeStatus, string> = {
  Live:               'Live',
  'Production Pilot': 'Production Pilot',
  Pilot:              'Pilot',
  PoC:                'Proof of Concept',
  Consultation:       'Consultation',
  Research:           'Research',
  Suspended:          'Suspended',
  Cancelled:          'Cancelled',
};

const NO_DATA_FILL  = '#1e293b'; // slate-800
const BORDER_COLOR  = '#0f172a'; // slate-950
const MIN_ZOOM      = 1;
const MAX_ZOOM      = 8;

// ── Helpers ───────────────────────────────────────────────────────────────────

type ZoomTransform = { x: number; y: number; k: number };

type JurisdictionData = {
  highestStatus: InitiativeStatus;
  initiatives: CBDCInitiative[];
};

type TooltipState = {
  x: number;
  y: number;
  jurisdictionId: string;
  data: JurisdictionData;
};

function getHighestStatus(initiatives: CBDCInitiative[]): InitiativeStatus {
  for (const status of STATUS_PRIORITY) {
    if (initiatives.some((i) => i.status === status)) return status;
  }
  return 'Research';
}

function clampTransform({ x, y, k }: ZoomTransform): ZoomTransform {
  // Keep enough of the map visible — allow panning up to (k-1) * full dimension
  const maxX = (k - 1) * WIDTH;
  const maxY = (k - 1) * HEIGHT;
  return {
    k,
    x: Math.max(-maxX, Math.min(0, x)),
    y: Math.max(-maxY, Math.min(0, y)),
  };
}

// ── Component ─────────────────────────────────────────────────────────────────

type Props = {
  activeRegions?: Region[];
  typeFilter?: string;
};

export function CBDCWorldMap({ activeRegions = [], typeFilter = 'all' }: Props) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const [tooltip, setTooltip]     = useState<TooltipState | null>(null);
  const [hoveredIso, setHoveredIso] = useState<number | null>(null);
  const [zoom, setZoom]           = useState<ZoomTransform>({ x: 0, y: 0, k: 1 });
  const [isDragging, setIsDragging] = useState(false);

  // Track drag origin so we can distinguish a click from a drag
  const dragRef = useRef<{ startX: number; startY: number; tx: number; ty: number } | null>(null);
  const hasDraggedRef = useRef(false);

  // ── Wheel zoom (non-passive so we can preventDefault) ──────────────────────
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = svg.getBoundingClientRect();
      // Mouse position in SVG coordinate space
      const mx = ((e.clientX - rect.left) / rect.width) * WIDTH;
      const my = ((e.clientY - rect.top) / rect.height) * HEIGHT;

      const factor = e.deltaY < 0 ? 1.25 : 1 / 1.25;

      setZoom((prev) => {
        const newK = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, prev.k * factor));
        if (newK === prev.k) return prev;
        const ratio = newK / prev.k;
        return clampTransform({
          k: newK,
          x: mx - (mx - prev.x) * ratio,
          y: my - (my - prev.y) * ratio,
        });
      });
    };

    svg.addEventListener('wheel', onWheel, { passive: false });
    return () => svg.removeEventListener('wheel', onWheel);
  }, []);

  // ── Drag to pan ────────────────────────────────────────────────────────────
  const onSvgMouseDown = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (zoom.k === 1) return;
    setIsDragging(true);
    hasDraggedRef.current = false;
    dragRef.current = { startX: e.clientX, startY: e.clientY, tx: zoom.x, ty: zoom.y };
    setTooltip(null);
  }, [zoom.k, zoom.x, zoom.y]);

  const onSvgMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (!isDragging || !dragRef.current) return;
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;

    const dx = ((e.clientX - dragRef.current.startX) / rect.width) * WIDTH;
    const dy = ((e.clientY - dragRef.current.startY) / rect.height) * HEIGHT;

    if (Math.abs(dx) > 2 || Math.abs(dy) > 2) hasDraggedRef.current = true;

    setZoom((prev) =>
      clampTransform({ k: prev.k, x: dragRef.current!.tx + dx, y: dragRef.current!.ty + dy })
    );
  }, [isDragging]);

  const onSvgMouseUp = useCallback(() => {
    setIsDragging(false);
    dragRef.current = null;
  }, []);

  // ── Zoom buttons ───────────────────────────────────────────────────────────
  const zoomBy = useCallback((factor: number) => {
    setZoom((prev) => {
      const newK = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, prev.k * factor));
      if (newK === prev.k) return prev;
      const cx = WIDTH / 2, cy = HEIGHT / 2;
      const ratio = newK / prev.k;
      return clampTransform({
        k: newK,
        x: cx - (cx - prev.x) * ratio,
        y: cy - (cy - prev.y) * ratio,
      });
    });
  }, []);

  const resetZoom = useCallback(() => setZoom({ x: 0, y: 0, k: 1 }), []);

  // ── Data ───────────────────────────────────────────────────────────────────
  const cbdcByJurisdiction = useMemo<Map<string, JurisdictionData>>(() => {
    const grouped = new Map<string, CBDCInitiative[]>();
    for (const i of getAllCBDCInitiatives()) {
      const arr = grouped.get(i.jurisdiction) ?? [];
      arr.push(i);
      grouped.set(i.jurisdiction, arr);
    }
    return new Map(
      [...grouped.entries()].map(([jId, initiatives]) => [
        jId,
        { highestStatus: getHighestStatus(initiatives), initiatives },
      ])
    );
  }, []);

  const { features, pathStrings } = useMemo(() => {
    const fc = feature(worldTopo, worldTopo.objects.countries) as unknown as FeatureCollection<Geometry>;
    const paths = new Map<string | number, string>(
      fc.features.map((f) => [f.id as string | number, pathGen(f) ?? ''])
    );
    return { features: fc.features, pathStrings: paths };
  }, []);

  const statusesInUse = useMemo(() => {
    const seen = new Set<InitiativeStatus>();
    for (const d of cbdcByJurisdiction.values()) seen.add(d.highestStatus);
    return STATUS_PRIORITY.filter((s) => seen.has(s));
  }, [cbdcByJurisdiction]);

  const filtersActive = activeRegions.length > 0 || typeFilter !== 'all';

  function isHighlighted(jurisdictionId: string, initiatives: CBDCInitiative[]): boolean {
    if (typeFilter !== 'all' && !initiatives.some((i) => i.type === typeFilter)) return false;
    if (activeRegions.length > 0) {
      const region = getJurisdictionRegion(jurisdictionId);
      if (!region || !activeRegions.includes(region)) return false;
    }
    return true;
  }

  // ── Tooltip handlers ───────────────────────────────────────────────────────
  const handleMouseEnter = useCallback(
    (e: React.MouseEvent, isoId: number, jurisdictionId: string, data: JurisdictionData) => {
      if (isDragging) return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      setHoveredIso(isoId);
      setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top, jurisdictionId, data });
    },
    [isDragging]
  );

  const handleMouseLeave = useCallback(() => {
    setTooltip(null);
    setHoveredIso(null);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent, isoId: number) => {
    if (isDragging || hoveredIso !== isoId) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setTooltip((prev) =>
      prev ? { ...prev, x: e.clientX - rect.left, y: e.clientY - rect.top } : prev
    );
  }, [isDragging, hoveredIso]);

  // ── Cursor ─────────────────────────────────────────────────────────────────
  const svgCursor = isDragging ? 'cursor-grabbing' : zoom.k > 1 ? 'cursor-grab' : undefined;

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div
      className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden"
      data-testid="cbdc-world-map"
    >
      <div ref={containerRef} className="relative select-none">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className={['w-full h-auto block', svgCursor].filter(Boolean).join(' ')}
          aria-label="World map of CBDC initiatives by jurisdiction"
          onMouseDown={onSvgMouseDown}
          onMouseMove={onSvgMouseMove}
          onMouseUp={onSvgMouseUp}
          onMouseLeave={onSvgMouseUp}
        >
          {/* Single transform group — zoom/pan applied here */}
          <g transform={`translate(${zoom.x},${zoom.y}) scale(${zoom.k})`}>
            {features.map((geo) => {
              const isoId = Number(geo.id);
              const jurisdictionId = ISO_TO_JURISDICTION[isoId];
              const data = jurisdictionId ? cbdcByJurisdiction.get(jurisdictionId) : undefined;
              const d = pathStrings.get(geo.id as string | number);
              if (!d) return null;

              const fill   = data ? STATUS_FILL[data.highestStatus] : NO_DATA_FILL;
              const dimmed = filtersActive && !!data && !isHighlighted(jurisdictionId!, data.initiatives);
              const isHovered = hoveredIso === isoId && !isDragging;

              return (
                <path
                  key={String(geo.id)}
                  d={d}
                  fill={fill}
                  opacity={dimmed ? 0.2 : 1}
                  stroke={BORDER_COLOR}
                  // Scale stroke inversely so borders stay crisp when zoomed in
                  strokeWidth={0.3 / zoom.k}
                  style={isHovered && data ? { filter: 'brightness(1.3)' } : undefined}
                  onMouseEnter={
                    data ? (e) => handleMouseEnter(e, isoId, jurisdictionId!, data) : undefined
                  }
                  onMouseMove={data ? (e) => handleMouseMove(e, isoId) : undefined}
                  onMouseLeave={data ? handleMouseLeave : undefined}
                  onClick={
                    data && !dimmed && !hasDraggedRef.current
                      ? () => router.push(`/cbdc/${jurisdictionId}`)
                      : undefined
                  }
                />
              );
            })}
          </g>
        </svg>

        {/* Zoom controls */}
        <div className="absolute bottom-3 right-3 flex flex-col gap-1" data-testid="map-zoom-controls">
          <button
            onClick={() => zoomBy(1.5)}
            aria-label="Zoom in"
            className="w-7 h-7 flex items-center justify-center rounded bg-slate-800/90 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white text-base leading-none transition-colors"
          >
            +
          </button>
          <button
            onClick={() => zoomBy(1 / 1.5)}
            aria-label="Zoom out"
            disabled={zoom.k <= MIN_ZOOM}
            className="w-7 h-7 flex items-center justify-center rounded bg-slate-800/90 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white text-base leading-none transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            −
          </button>
          {zoom.k > 1 && (
            <button
              onClick={resetZoom}
              aria-label="Reset zoom"
              className="w-7 h-7 flex items-center justify-center rounded bg-slate-800/90 border border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-white text-[9px] font-semibold tracking-wide transition-colors"
            >
              ↺
            </button>
          )}
        </div>

        {/* Zoom hint — shown only at 1× */}
        {zoom.k === 1 && (
          <p className="absolute bottom-3 left-3 text-[10px] text-slate-600 pointer-events-none">
            Scroll to zoom · Drag to pan
          </p>
        )}

        {/* Current zoom level badge — shown when zoomed */}
        {zoom.k > 1 && (
          <p className="absolute bottom-3 left-3 text-[10px] text-slate-500 pointer-events-none">
            {zoom.k.toFixed(1)}×
          </p>
        )}

        {/* Floating tooltip */}
        {tooltip && !isDragging && (
          <div
            data-testid="map-tooltip"
            className="absolute z-10 pointer-events-none bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 shadow-xl min-w-[180px] max-w-[260px]"
            style={{
              left: Math.min(tooltip.x + 14, (containerRef.current?.offsetWidth ?? WIDTH) - 270),
              top: Math.max(tooltip.y - 8, 8),
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl leading-none">{getJurisdictionFlag(tooltip.jurisdictionId)}</span>
              <span className="font-semibold text-slate-100 text-sm">
                {getJurisdictionDisplayName(tooltip.jurisdictionId)}
              </span>
            </div>
            <div className="space-y-1.5">
              {tooltip.data.initiatives.map((i) => (
                <div key={i.id} className="flex items-center justify-between gap-2">
                  <span className="text-xs text-slate-400 truncate flex-1">{i.name}</span>
                  <StatusBadge status={i.status} size="sm" />
                </div>
              ))}
            </div>
            <p className="mt-2 text-[10px] text-slate-500">Click to view details</p>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 px-4 py-3 border-t border-slate-800">
        <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Status</span>
        {statusesInUse.map((status) => (
          <div key={status} className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: STATUS_FILL[status] }} />
            <span className="text-[11px] text-slate-400">{STATUS_LABELS[status]}</span>
          </div>
        ))}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: NO_DATA_FILL }} />
          <span className="text-[11px] text-slate-400">No data</span>
        </div>
      </div>
    </div>
  );
}
