type MapDot = {cx: number; cy: number};
type MapArc = {d: string};

/**
 * Coarse continental-US silhouette as [startCol, endCol] land bands per row,
 * on a 40-col × 20-row grid. Rendered as a faint navy dot matrix.
 */
const BANDS: Record<number, [number, number][]> = {
  0: [[4, 34]],
  1: [[3, 35]],
  2: [[3, 36]],
  3: [[3, 37]],
  4: [[3, 36]],
  5: [[3, 35]],
  6: [[3, 35]],
  7: [[3, 34]],
  8: [[3, 34]],
  9: [[4, 34]],
  10: [[4, 33]],
  11: [[4, 33]],
  12: [[4, 33]],
  13: [[5, 32]],
  14: [
    [13, 25],
    [27, 33],
  ],
  15: [
    [15, 23],
    [31, 33],
  ],
  16: [
    [16, 22],
    [31, 34],
  ],
  17: [
    [17, 21],
    [32, 34],
  ],
  18: [[32, 34]],
  19: [[33, 34]],
};

/** Featured destination markers at approximate metro grid cells [col, row]. */
const PIN_CELLS: [number, number][] = [
  [4, 2],
  [5, 12],
  [14, 9],
  [26, 7],
  [35, 5],
  [19, 14],
  [30, 13],
  [34, 18],
];

/** Compute the dot-grid, destination pins, Memphis hub and delivery arcs once. */
function buildMap(): {
  dots: MapDot[];
  pins: MapDot[];
  hub: MapDot;
  arcs: MapArc[];
} {
  const dots: MapDot[] = [];
  for (const row of Object.keys(BANDS).map(Number)) {
    for (const [a, b] of BANDS[row]) {
      for (let c = a; c <= b; c++) {
        dots.push({cx: c * 10 + 5, cy: row * 10 + 5});
      }
    }
  }

  const pins: MapDot[] = PIN_CELLS.map(([c, r]) => ({
    cx: c * 10 + 5,
    cy: r * 10 + 5,
  }));

  // Central crating hub (Memphis) with a bezier arc out to each destination.
  const hub: MapDot = {cx: 28 * 10 + 5, cy: 13 * 10 + 5};
  const arcs: MapArc[] = pins.map((p) => {
    const mx = (hub.cx + p.cx) / 2;
    const my = (hub.cy + p.cy) / 2;
    const dx = p.cx - hub.cx;
    const dy = p.cy - hub.cy;
    const len = Math.hypot(dx, dy) || 1;
    // Lift the control point perpendicular to the chord for a gentle arc.
    const lift = Math.min(38, len * 0.28);
    const qx = mx + (-dy / len) * lift;
    const qy = my + (dx / len) * lift - 6;
    return {
      d: `M ${hub.cx} ${hub.cy} Q ${qx.toFixed(1)} ${qy.toFixed(1)} ${p.cx} ${p.cy}`,
    };
  });

  return {dots, pins, hub, arcs};
}

const MAP = buildMap();

export function DeliveryMap({
  eyebrow,
  heading,
  body,
  hubLabel = 'Memphis inventory hub',
  destinationsLabel = 'Regional delivery destinations',
  coverageLabel = 'Active delivery coverage',
}: {
  eyebrow?: string | null;
  heading: string;
  body?: string | null;
  hubLabel?: string | null;
  destinationsLabel?: string | null;
  coverageLabel?: string | null;
}) {
  const {dots, pins, hub, arcs} = MAP;

  return (
    <section className="border-t border-border bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-9 px-5 py-14 sm:px-10 lg:py-18">
        <div className="flex flex-col items-center gap-2.5 text-center">
          {eyebrow && (
            <span className="font-heading text-xs font-semibold tracking-[0.14em] text-primary uppercase">
              {eyebrow}
            </span>
          )}
          <h2 className="font-heading text-[28px] leading-tight font-bold tracking-tight text-foreground sm:text-4xl">
            {heading}
          </h2>
          {body && (
            <p className="max-w-[560px] text-base leading-relaxed text-muted-foreground">
              {body}
            </p>
          )}
        </div>

        <div className="relative w-full max-w-[840px]">
          <svg
            viewBox="0 0 400 200"
            className="block h-auto w-full [overflow:visible]"
            role="img"
            aria-label="Map of the United States showing the Universal Statues delivery network from a central Memphis hub"
          >
            {dots.map((d) => (
              <circle
                key={`d-${d.cx}-${d.cy}`}
                cx={d.cx}
                cy={d.cy}
                r={2}
                fill="#123A78"
                fillOpacity={0.14}
              />
            ))}

            {/* `us-arc` / `us-pulse` are defined in tailwind.css. The source set
                these as inline `style` attributes, which a nonce-based CSP
                blocks — nonces do not apply to style attributes. */}
            {arcs.map((a) => (
              <path
                key={a.d}
                className="us-arc"
                d={a.d}
                fill="none"
                stroke="#a67c52"
                strokeWidth={1.1}
                strokeOpacity={0.55}
                strokeLinecap="round"
                strokeDasharray="3 6"
              />
            ))}

            {pins.map((p) => (
              <g key={`p-${p.cx}-${p.cy}`}>
                <circle
                  className="us-pulse"
                  cx={p.cx}
                  cy={p.cy}
                  r={8.5}
                  fill="#a67c52"
                  fillOpacity={0.15}
                />
                <circle
                  cx={p.cx}
                  cy={p.cy}
                  r={4}
                  fill="#a67c52"
                  stroke="#fff"
                  strokeWidth={1.4}
                />
              </g>
            ))}

            <circle
              className="us-pulse"
              cx={hub.cx}
              cy={hub.cy}
              r={14}
              fill="#123A78"
              fillOpacity={0.1}
            />
            <circle
              cx={hub.cx}
              cy={hub.cy}
              r={6.5}
              fill="#123A78"
              stroke="#fff"
              strokeWidth={2}
            />
          </svg>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-7">
          <LegendItem dotClassName="size-[11px] bg-primary">
            {hubLabel}
          </LegendItem>
          <LegendItem dotClassName="size-[10px] bg-clay">
            {destinationsLabel}
          </LegendItem>
          <LegendItem dotClassName="size-[10px] bg-primary/28">
            {coverageLabel}
          </LegendItem>
        </div>
      </div>
    </section>
  );
}

function LegendItem({
  children,
  dotClassName,
}: {
  children: React.ReactNode;
  /** Size and fill of the legend swatch, as utilities (was an inline style). */
  dotClassName: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 text-[13px] text-muted-foreground">
      <span className={`flex-none rounded-full ${dotClassName}`} />
      {children}
    </span>
  );
}
