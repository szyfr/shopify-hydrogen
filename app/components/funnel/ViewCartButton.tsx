import {Button} from '~/components/funnel/ui/button';
import {useFunnelCartUI} from '~/components/funnel/FunnelCartUIContext';

/** Secondary cart trigger (used in the final CTA) that opens the shared cart panel. */
export function ViewCartButton({label}: {label: string}) {
  const {openCart} = useFunnelCartUI();

  return (
    <Button variant="outline-inverse" size="2xl" onClick={openCart}>
      {label}
    </Button>
  );
}
