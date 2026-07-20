import {createContext, useContext, useMemo, useState} from 'react';

/**
 * Open/closed state for the funnel's cart panel.
 *
 * This is deliberately *only* UI state. The cart data itself comes from
 * Hydrogen (`context.cart` via the root loader) and all mutations go through
 * `CartForm` to the `/cart` action — none of that belongs here.
 *
 * Mirrors the shape of the skeleton's `Aside.Provider`, but the funnel opts
 * out of `PageLayout` (see `handle.chrome` on the route), so that provider is
 * not in the tree.
 */
type FunnelCartUI = {
  open: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
};

const FunnelCartUIContext = createContext<FunnelCartUI | null>(null);

export function FunnelCartUIProvider({children}: {children: React.ReactNode}) {
  const [open, setOpen] = useState(false);

  const value = useMemo<FunnelCartUI>(
    () => ({
      open,
      openCart: () => setOpen(true),
      closeCart: () => setOpen(false),
      toggleCart: () => setOpen((prev) => !prev),
    }),
    [open],
  );

  return (
    <FunnelCartUIContext.Provider value={value}>
      {children}
    </FunnelCartUIContext.Provider>
  );
}

export function useFunnelCartUI() {
  const context = useContext(FunnelCartUIContext);
  if (!context) {
    throw new Error(
      'useFunnelCartUI must be used within a FunnelCartUIProvider',
    );
  }
  return context;
}
