import {cva, type VariantProps} from 'class-variance-authority';

import {cn} from '~/lib/funnel/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-xs font-heading font-bold uppercase',
  {
    variants: {
      variant: {
        neutral: 'bg-off-black text-white',
        primary: 'bg-badge-primary-bg text-primary',
        error: 'bg-badge-error-bg text-destructive',
        warning: 'bg-badge-warning-bg text-warning',
        success: 'bg-badge-success-bg text-success',
        clay: 'bg-clay text-white',
      },
      size: {
        sm: 'px-1.5 py-[3px] text-[10px] tracking-[0.08em]',
        default: 'px-2 py-0.5 text-[11px] tracking-[0.04em]',
        lg: 'px-3.5 py-1.75 text-xs tracking-[0.12em]',
      },
    },
    defaultVariants: {
      variant: 'neutral',
      size: 'default',
    },
  },
);

function Badge({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({variant, size, className}))}
      {...props}
    />
  );
}

export {Badge, badgeVariants};
