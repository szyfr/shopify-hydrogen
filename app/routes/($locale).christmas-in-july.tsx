import type {Route} from './+types/($locale).christmas-in-july';
import type {RouteHandle} from '~/root';
import funnelResetStyles from '~/styles/funnel-reset.css?url';

import * as content from '~/content/christmas-in-july';
import {FunnelCartUIProvider} from '~/components/funnel/FunnelCartUIContext';
import {AnnouncementBar} from '~/components/funnel/AnnouncementBar';
import {FunnelHeader} from '~/components/funnel/FunnelHeader';
import {FunnelHero} from '~/components/funnel/FunnelHero';
import {ValueProps} from '~/components/funnel/ValueProps';
import {TrustBadges} from '~/components/funnel/TrustBadges';
import {DeliveryMap} from '~/components/funnel/DeliveryMap';
import {FaqAccordion} from '~/components/funnel/FaqAccordion';
import {FinalCta} from '~/components/funnel/FinalCta';
import {SiteFooter} from '~/components/funnel/SiteFooter';

/**
 * The funnel renders its own header and footer, so it opts out of the
 * storefront chrome supplied by `PageLayout`.
 */
export const handle: RouteHandle = {chrome: false};

export const links: Route.LinksFunction = () => [
  {rel: 'stylesheet', href: funnelResetStyles},
  {
    rel: 'icon',
    type: 'image/webp',
    sizes: '32x32',
    href: '/icons/favicon-32x32.webp',
  },
  {
    rel: 'icon',
    type: 'image/webp',
    sizes: '16x16',
    href: '/icons/favicon-16x16.webp',
  },
  {rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.webp'},
];

export const meta: Route.MetaFunction = () => {
  return [
    {title: 'Universal Statues — Christmas in July'},
    {
      name: 'description',
      content:
        'Commercial seasonal Christmas and Halloween décor built to order for malls, parks, and leisure destinations.',
    },
    {property: 'og:title', content: 'Universal Statues — Christmas in July'},
    {property: 'og:type', content: 'website'},
    // TODO: remove once the real catalog replaces the demo products.
    {name: 'robots', content: 'noindex,nofollow'},
  ];
};

export async function loader(_args: Route.LoaderArgs) {
  return {
    // Computed server-side so the footer's copyright year cannot disagree
    // between the server render and hydration.
    year: new Date().getFullYear(),
  };
}

export default function ChristmasInJuly({loaderData}: Route.ComponentProps) {
  const {year} = loaderData;

  return (
    <FunnelCartUIProvider>
      <div className="funnel-root flex min-h-screen flex-col">
        <AnnouncementBar {...content.announcementBar} />
        <FunnelHeader {...content.funnelHeader} />

        <main className="flex-1">
          <FunnelHero {...content.funnelHero} />
          <ValueProps {...content.valueProps} />

          {/* Phase 5 replaces this placeholder with the live sale catalog. */}
          <section
            id="catalog"
            className="border-t border-border bg-background"
          >
            <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-2.5 px-5 py-14 text-center sm:px-10 lg:py-18">
              <span className="font-heading text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                {content.saleCatalog.eyebrow}
              </span>
              <h2 className="font-heading text-[28px] leading-tight font-bold tracking-tight text-foreground sm:text-4xl">
                {content.saleCatalog.heading}
              </h2>
              <p className="max-w-[560px] text-base leading-relaxed text-muted-foreground">
                {content.saleCatalog.body}
              </p>
              <p className="mt-4 rounded-lg border border-dashed border-border-medium px-4 py-3 text-sm text-text-subtle">
                Sale catalog lands in Phase 5.
              </p>
            </div>
          </section>

          <TrustBadges {...content.trustBadges} />
          <DeliveryMap {...content.deliveryMap} />
          <FaqAccordion {...content.faq} />
          <FinalCta {...content.finalCta} />
        </main>

        <SiteFooter {...content.siteFooter} year={year} />
      </div>
    </FunnelCartUIProvider>
  );
}
