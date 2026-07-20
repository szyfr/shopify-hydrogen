import {ShoppingCart} from 'lucide-react';

import type {SiteLogo} from '~/content/christmas-in-july';
import {Badge} from '~/components/funnel/ui/badge';
import {Button} from '~/components/funnel/ui/button';
import {useFunnelCartUI} from '~/components/funnel/FunnelCartUIContext';

const DEFAULT_LOGO: SiteLogo = {
  url: '/campaign/logo_blue.png',
  alt: 'Universal Statues',
  width: 686,
  height: 300,
};

export function FunnelHeader({
  logo = DEFAULT_LOGO,
  ctaLabel = 'Shop the sale',
  ctaHref = '#catalog',
  showCart = true,
  itemCount = 0,
}: {
  logo?: SiteLogo;
  ctaLabel?: string | null;
  ctaHref?: string;
  showCart?: boolean | null;
  /** Supplied by the route from the (optimistic) Hydrogen cart. */
  itemCount?: number;
}) {
  const {toggleCart} = useFunnelCartUI();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-5 sm:px-10">
        <img
          src={logo.url}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="h-[34px] w-auto"
        />
        <div className="flex items-center gap-5">
          {ctaLabel && (
            <Button
              size="md"
              nativeButton={false}
              render={<a href={ctaHref}>{ctaLabel}</a>}
            />
          )}
          {showCart && (
            <Button
              variant="outline"
              size="icon-lg"
              onClick={toggleCart}
              aria-label={`Cart${itemCount > 0 ? `, ${itemCount} items` : ''}`}
              className="relative size-10 [&_svg:not([class*='size-'])]:size-5"
            >
              <ShoppingCart />
              {itemCount > 0 && (
                <Badge
                  variant="clay"
                  className="absolute -top-[7px] -right-[7px] h-[18px] min-w-[18px] justify-center rounded-full px-[5px] py-0"
                >
                  {itemCount > 99 ? '99+' : itemCount}
                </Badge>
              )}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
