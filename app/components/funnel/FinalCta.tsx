import {ViewCartButton} from '~/components/funnel/ViewCartButton';
import {Button} from '~/components/funnel/ui/button';

/** A secondary CTA that opens the cart panel instead of navigating (href `#cart`, or a "View cart" label). */
function opensCart(href: string, label?: string | null): boolean {
  return href === '#cart' || /view cart/i.test(label ?? '');
}

export function FinalCta({
  eyebrow,
  heading,
  body,
  primaryCtaLabel,
  primaryCtaHref = '#catalog',
  secondaryCtaLabel,
  secondaryCtaHref = '#catalog',
}: {
  eyebrow?: string | null;
  heading: string;
  body?: string | null;
  primaryCtaLabel?: string | null;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string | null;
  secondaryCtaHref?: string;
}) {
  return (
    <section className="bg-primary">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4.5 px-5 py-20 text-center sm:px-10">
        {eyebrow && (
          <span className="font-heading text-xs font-semibold tracking-[0.14em] text-white/70 uppercase">
            {eyebrow}
          </span>
        )}
        <h2 className="font-heading text-[30px] leading-tight font-bold tracking-tight text-white sm:text-[38px]">
          {heading}
        </h2>
        {body && (
          <p className="max-w-[520px] text-base leading-relaxed text-white/[0.78]">
            {body}
          </p>
        )}
        {(primaryCtaLabel || secondaryCtaLabel) && (
          <div className="mt-2 flex flex-wrap justify-center gap-3.5">
            {primaryCtaLabel && (
              <Button
                variant="clay"
                size="2xl"
                nativeButton={false}
                render={<a href={primaryCtaHref}>{primaryCtaLabel}</a>}
              />
            )}
            {secondaryCtaLabel &&
              (opensCart(secondaryCtaHref, secondaryCtaLabel) ? (
                <ViewCartButton label={secondaryCtaLabel} />
              ) : (
                <Button
                  variant="outline-inverse"
                  size="2xl"
                  nativeButton={false}
                  render={<a href={secondaryCtaHref}>{secondaryCtaLabel}</a>}
                />
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
