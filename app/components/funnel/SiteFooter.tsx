import {Mail, Phone} from 'lucide-react';

import type {SiteLogo} from '~/content/christmas-in-july';

const DEFAULT_LOGO: SiteLogo = {
  url: '/campaign/logo_black.png',
  alt: 'Universal Statues',
  width: 685,
  height: 300,
};

export function SiteFooter({
  logo = DEFAULT_LOGO,
  copyrightText = 'Universal Statues. All rights reserved.',
  phone = '901-633-3283',
  email = 'customerservice@universalstatuesgroup.com',
  year,
}: {
  logo?: SiteLogo;
  copyrightText?: string;
  phone?: string | null;
  email?: string | null;
  /**
   * Supplied by the loader. The source called `new Date().getFullYear()`
   * inline, which can disagree between server and client across a New Year
   * timezone boundary and produce a hydration mismatch.
   */
  year: number;
}) {
  return (
    <footer className="bg-off-black">
      <div className="mx-auto flex max-w-[1080px] flex-col items-center gap-4.5 px-8 py-10">
        <img
          src={logo.url}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="h-12 w-auto opacity-90 brightness-0 invert"
        />
        {(phone || email) && (
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {phone && (
              <a
                href={`tel:${phone.replace(/\D/g, '')}`}
                className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
              >
                <Phone size={16} strokeWidth={2} />
                {phone}
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
              >
                <Mail size={16} strokeWidth={2} />
                {email}
              </a>
            )}
          </div>
        )}
        <span className="text-center text-xs leading-relaxed text-white/50">
          © {year} {copyrightText}
        </span>
      </div>
    </footer>
  );
}
