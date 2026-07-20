import {
  Check,
  Clock,
  Grid2x2,
  type LucideIcon,
  ShieldCheck,
  Star,
  Truck,
} from 'lucide-react';

export type ValuePropIcon =
  | 'truck'
  | 'grid'
  | 'check'
  | 'clock'
  | 'shield'
  | 'star';

const ICONS: Record<ValuePropIcon, LucideIcon> = {
  truck: Truck,
  grid: Grid2x2,
  check: Check,
  clock: Clock,
  shield: ShieldCheck,
  star: Star,
};

export type ValuePropItem = {
  icon: ValuePropIcon;
  title: string;
  body?: string | null;
};

export function ValueProps({items}: {items: ValuePropItem[]}) {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-7 px-5 py-10 sm:grid-cols-3 sm:gap-10 sm:px-10">
        {items.map((item) => {
          const Icon = ICONS[item.icon] ?? Check;
          return (
            <div key={item.title} className="flex items-start gap-3.5">
              <Icon
                size={24}
                strokeWidth={2}
                className="mt-0.5 shrink-0 text-primary"
              />
              <div className="flex flex-col gap-1">
                <span className="font-heading text-[15px] font-bold text-foreground">
                  {item.title}
                </span>
                {item.body && (
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
