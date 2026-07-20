/**
 * Hardcoded funnel content.
 *
 * In the Next.js storefront this lived in Payload CMS and was seeded by
 * `src/seed.ts`. The migration drops the CMS, so the copy is transcribed here
 * verbatim, block by block, in the order the page renders them.
 *
 * Product data is NOT here — the sale catalog is loaded from the Storefront
 * API in the route loader.
 */

export type SiteLogo = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export const LOGO_BLUE: SiteLogo = {
  url: '/campaign/logo_blue.png',
  alt: 'Universal Statues',
  width: 220,
  height: 60,
};

export const LOGO_BLACK: SiteLogo = {
  url: '/campaign/logo_black.png',
  alt: 'Universal Statues',
  width: 220,
  height: 60,
};

export const HERO_IMAGE: SiteLogo = {
  url: '/campaign/hero_stage.png',
  alt: 'Commercial holiday display installation',
  width: 1600,
  height: 1200,
};

export const announcementBar = {
  text: 'Christmas in July — up to 80% off',
  showCountdown: true,
  countdownLabel: 'Sale ends in',
  /**
   * The seed left `saleEndDate` unset, so the component's built-in default
   * applies: July 31, 23:59:59 of the current year, in the viewer's timezone.
   */
  saleEndDate: undefined as string | undefined,
};

export const funnelHeader = {
  logo: LOGO_BLUE,
  ctaLabel: 'Shop the sale',
  ctaHref: '#catalog',
  showCart: true,
};

export const funnelHero = {
  badge: 'Limited time — July only',
  heading: 'Lock in your holiday displays at up to 80% off',
  body: '150 commercial-grade statues, animatronics, and photo ops — built to order and delivered before the season starts. Order in July, delivered by November.',
  primaryCtaLabel: 'Shop the sale',
  primaryCtaHref: '#catalog',
  secondaryCtaLabel: 'Browse 150 pieces',
  secondaryCtaHref: '#catalog',
  image: HERO_IMAGE,
  stats: [
    {value: '2,000+', label: 'pieces in catalog'},
    {value: '300+', label: 'malls & parks supplied'},
    {value: '12 weeks', label: 'average build & delivery'},
  ],
};

export const valueProps = {
  items: [
    {
      icon: 'truck' as const,
      title: 'Delivered before the season',
      body: 'July orders ship in time for the November season — guaranteed.',
    },
    {
      icon: 'grid' as const,
      title: 'Built to order, commercial grade',
      body: 'Fiberglass and animatronics rated for high-traffic retail spaces.',
    },
    {
      icon: 'check' as const,
      title:
        'The price you see is the price you pay — freight included',
      body: 'No codes needed — every price is already marked down with US freight included.',
    },
  ],
};

export const saleCatalog = {
  eyebrow: 'Step 1 — Pick your pieces',
  heading: '150 pieces on sale right now',
  body: 'Add pieces to your cart as you browse, or buy a single piece outright in a couple of clicks.',
  searchPlaceholder: 'Search 150 sale pieces…',
  initialCount: 30,
  loadMoreLabel: 'Load more pieces',
};

export const trustBadges = {
  eyebrow: 'Step 2 — Buy with confidence',
  heading: 'Trusted by 300+ malls, parks & venues',
  badges: [
    {
      icon: 'lock' as const,
      title: 'Secure checkout',
      body: 'Encrypted payment with all major cards and bank transfer for large orders.',
    },
    {
      icon: 'truck' as const,
      title: 'On-time delivery guarantee',
      body: "100% of last year's July orders were delivered before Nov 15.",
    },
    {
      icon: 'shield' as const,
      title: '2-year commercial warranty',
      body: 'Fiberglass and animatronics rated for high-traffic retail spaces.',
    },
    {
      icon: 'globe' as const,
      title: 'Ships anywhere in the US',
      body: 'Crated freight to any US address, already included in the price and delivered ready to display.',
    },
  ],
};

export const deliveryMap = {
  eyebrow: 'Our delivery network',
  heading: 'One inventory hub. 300+ venues delivered.',
  body: 'Our primary inventory for seasonal and ready-to-ship items is in Memphis — shipping on managed freight to malls, parks, and venues from the Pacific Northwest to South Florida. Exact delivery is arranged with you after purchase.',
  hubLabel: 'Memphis inventory hub',
  destinationsLabel: 'Regional delivery destinations',
  coverageLabel: 'Active delivery coverage',
};

export const faq = {
  eyebrow: 'Good to know',
  heading: 'Frequently asked questions',
  items: [
    {
      question: 'Do you have products in stock, or are they made to order?',
      answer:
        'We offer both. We maintain inventory in our Memphis warehouse for many seasonal and standard items, allowing for faster delivery, while also offering made-to-order and custom pieces.',
    },
    {
      question: 'How fast can in-stock items ship?',
      answer:
        'Most in-stock items from our Memphis inventory can be prepared and shipped within approximately 3 days, depending on order size and destination.',
    },
    {
      question: 'What are the delivery methods and costs?',
      answer:
        'We deliver by truck through our trusted carrier network. After purchase, our customer service team reviews your delivery destination, calculates the exact shipping cost, and confirms it with you before the order is finalized. The carrier then contacts you to schedule a delivery date and time.',
    },
    {
      question: 'Are your products suitable for outdoor use?',
      answer:
        'Yes — our fiberglass statues withstand any weather. Some upholstered pieces and all animatronic figures are designed for indoor use only. Check the product description for specifics.',
    },
    {
      question: 'What if an item appears out of stock?',
      answer:
        'If an item appears unavailable, please contact us. We have ongoing incoming shipments and may be able to supply standard products quickly or offer similar alternatives.',
    },
    {
      question: 'Do you offer special pricing for businesses?',
      answer:
        'Yes. Businesses can register for a B2B account to access more favorable, volume-based pricing and benefits.',
    },
  ],
  contactPrompt:
    'Still have questions about a piece, a bulk order, or delivery to your venue?',
  contactEmail: 'customerservice@universalstatuesgroup.com',
};

export const finalCta = {
  eyebrow: 'Step 3 — Check out before July 31',
  heading: 'The sale ends when July does',
  body: 'Sale pricing is applied automatically at checkout. July orders are built to order and delivered before the November season window.',
  primaryCtaLabel: 'Shop the sale',
  primaryCtaHref: '#catalog',
  secondaryCtaLabel: 'View cart',
  secondaryCtaHref: '#cart',
};

export const siteFooter = {
  logo: LOGO_BLACK,
  copyrightText: 'Universal Statues LLC. All rights reserved.',
  phone: '901-633-3283',
  email: 'customerservice@universalstatuesgroup.com',
};
