import {
  Check,
  Clock,
  Globe,
  Lock,
  type LucideIcon,
  ShieldCheck,
  Truck,
} from 'lucide-react';

import {Card, CardContent} from '~/components/funnel/ui/card';

export type TrustBadgeIcon =
  | 'lock'
  | 'truck'
  | 'shield'
  | 'globe'
  | 'check'
  | 'clock';

const ICONS: Record<TrustBadgeIcon, LucideIcon> = {
  lock: Lock,
  truck: Truck,
  shield: ShieldCheck,
  globe: Globe,
  check: Check,
  clock: Clock,
};

export type TrustBadgeItem = {
  icon: TrustBadgeIcon;
  title: string;
  body?: string | null;
};

export function TrustBadges({
  eyebrow,
  heading,
  badges = [],
}: {
  eyebrow?: string | null;
  heading: string;
  badges?: TrustBadgeItem[];
}) {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-5 py-14 sm:px-10 lg:py-18">
        <div className="flex flex-col items-center gap-2.5 text-center">
          {eyebrow && (
            <span className="font-heading text-xs font-semibold tracking-[0.14em] text-primary uppercase">
              {eyebrow}
            </span>
          )}
          <h2 className="font-heading text-[28px] leading-tight font-bold tracking-tight text-foreground sm:text-4xl">
            {heading}
          </h2>
        </div>
        {badges.length > 0 && (
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {badges.map((badge) => {
              const Icon = ICONS[badge.icon] ?? ShieldCheck;
              return (
                <Card key={badge.title} className="rounded-none py-6 sm:py-7">
                  <CardContent className="flex flex-col gap-3 px-6">
                    <Icon size={28} strokeWidth={2} className="text-primary" />
                    <span className="font-heading text-[15px] font-bold text-foreground">
                      {badge.title}
                    </span>
                    {badge.body && (
                      <span className="text-[13px] leading-relaxed text-muted-foreground">
                        {badge.body}
                      </span>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
