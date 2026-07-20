import {ArrowRight} from 'lucide-react';
import {Fragment} from 'react';

import type {SiteLogo} from '~/content/christmas-in-july';
import {Badge} from '~/components/funnel/ui/badge';
import {Button} from '~/components/funnel/ui/button';
import {Separator} from '~/components/funnel/ui/separator';

export type HeroStat = {value: string; label: string};

export function FunnelHero({
  badge,
  heading,
  body,
  primaryCtaLabel,
  primaryCtaHref = '#catalog',
  secondaryCtaLabel,
  secondaryCtaHref = '#catalog',
  image,
  stats = [],
}: {
  badge?: string | null;
  heading: string;
  body?: string | null;
  primaryCtaLabel?: string | null;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string | null;
  secondaryCtaHref?: string;
  image?: SiteLogo;
  stats?: HeroStat[];
}) {
  return (
    <section className="relative w-full overflow-hidden bg-off-black">
      {image && (
        /* The design dims a right-half cover image under the gradient with the
           text composed over it. The section spans the full width of its
           (full-bleed) parent so the banner scales with the browser width.
           Below the 900px tier the image becomes a full-bleed background,
           matching the hero-test prototype's breakpoints. */
        <div className="absolute inset-y-0 right-0 w-[52%] max-[900px]:w-full">
          <img
            src={image.url}
            alt={image.alt}
            sizes="(max-width: 900px) 100vw, 52vw"
            className="absolute inset-0 h-full w-full object-cover object-[center_40%] max-[680px]:object-[center_30%]"
            fetchPriority="high"
          />
        </div>
      )}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#121a2a_0%,#121a2a_46%,rgba(18,26,42,0.72)_66%,rgba(18,26,42,0.15)_100%)] max-[900px]:bg-[linear-gradient(90deg,rgba(18,26,42,0.92)_0%,rgba(18,26,42,0.82)_100%)]" />
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-start gap-5.5 px-10 pt-24 pb-22 max-[900px]:px-8 max-[900px]:pt-18 max-[900px]:pb-16 max-[680px]:gap-4 max-[680px]:px-5 max-[680px]:pt-8 max-[680px]:pb-10">
        {badge && (
          <Badge variant="clay" size="lg">
            {badge}
          </Badge>
        )}
        <h1 className="max-w-[640px] font-heading text-[52px] leading-[1.12] font-bold tracking-tight text-white max-[900px]:max-w-[460px] max-[900px]:text-[40px] max-[680px]:max-w-none max-[680px]:text-[28px]">
          {heading}
        </h1>
        {body && (
          <p className="max-w-[520px] text-lg leading-relaxed text-white/80 max-[900px]:max-w-[400px] max-[900px]:text-base max-[680px]:max-w-none max-[680px]:text-[15px]">
            {body}
          </p>
        )}
        <div className="mt-2 flex flex-wrap items-center gap-3.5 max-[680px]:w-full max-[680px]:flex-col max-[680px]:items-stretch">
          {primaryCtaLabel && (
            <Button
              variant="clay"
              size="2xl"
              className="max-[680px]:w-full"
              nativeButton={false}
              render={
                <a href={primaryCtaHref}>
                  {primaryCtaLabel}
                  <ArrowRight data-icon="inline-end" />
                </a>
              }
            />
          )}
          {secondaryCtaLabel && (
            <Button
              variant="outline-inverse"
              size="2xl"
              className="max-[680px]:w-full"
              nativeButton={false}
              render={<a href={secondaryCtaHref}>{secondaryCtaLabel}</a>}
            />
          )}
        </div>
        {stats.length > 0 && (
          <div className="mt-6.5 flex flex-wrap items-center gap-8 max-[900px]:gap-5.5 max-[680px]:mt-4.5 max-[680px]:gap-x-6 max-[680px]:gap-y-4">
            {stats.map((stat, i) => (
              <Fragment key={stat.label}>
                {i > 0 && (
                  <Separator
                    orientation="vertical"
                    className="hidden h-8.5 self-center! bg-white/20 sm:block"
                  />
                )}
                <div className="flex flex-col gap-0.5">
                  <span className="font-heading text-2xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-[13px] text-white/65">
                    {stat.label}
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
