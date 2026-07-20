import {useEffect, useState} from 'react';

import {Separator} from '~/components/funnel/ui/separator';

/** Campaign fallback: the last second of July in the viewer's local time. */
function defaultSaleEnd() {
  return new Date(new Date().getFullYear(), 6, 31, 23, 59, 59).getTime();
}

function formatCountdown(msLeft: number) {
  const pad = (n: number) => String(n).padStart(2, '0');
  const d = Math.floor(msLeft / 86_400_000);
  const h = Math.floor(msLeft / 3_600_000) % 24;
  const m = Math.floor(msLeft / 60_000) % 60;
  const s = Math.floor(msLeft / 1_000) % 60;
  return `${d}d ${pad(h)}h ${pad(m)}m ${pad(s)}s`;
}

export function AnnouncementBar({
  text = 'Christmas in July — up to 60% off',
  showCountdown = true,
  countdownLabel = 'Sale ends in',
  saleEndDate,
}: {
  text?: string;
  showCountdown?: boolean;
  countdownLabel?: string | null;
  saleEndDate?: string | null;
}) {
  // null until mounted so the ticking clock never mismatches the server HTML
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    if (!showCountdown) return;
    setNow(Date.now());
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [showCountdown]);

  const end = saleEndDate ? new Date(saleEndDate).getTime() : defaultSaleEnd();

  return (
    <div className="bg-primary text-white">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-3.5 gap-y-1 px-5 py-2.5 sm:px-10">
        <span className="font-heading text-xs font-semibold tracking-[0.12em] uppercase">
          {text}
        </span>
        {showCountdown && now !== null && (
          <>
            <Separator
              orientation="vertical"
              className="hidden h-3.5 self-center! bg-white/30 sm:block"
            />
            {countdownLabel && (
              <span className="text-xs opacity-85">{countdownLabel}</span>
            )}
            <span className="font-heading text-[13px] font-bold tracking-[0.04em] tabular-nums">
              {formatCountdown(Math.max(0, end - now))}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
