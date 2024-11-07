import { cn } from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';

const buttonStyles = cva(
  [
    'focus:outline-primary-500 flex cursor-pointer items-center justify-center gap-2 rounded text-sm font-semibold transition-all duration-150 disabled:pointer-events-none disabled:opacity-10',
  ],
  {
    variants: {
      variant: {
        primary: '',
        secondary: '',
      },
      size: {
        sm: 'text-xs px-4 py-3',
        md: 'text-sm px-4 py-3',
        lg: 'text-lg px-6 py-3',
      },
      isLoading: {
        true: '',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        className: 'bg-blue-700 hover:bg-blue-800 text-white',
      },
      {
        variant: 'secondary',
        className: 'bg-zinc-200 hover:bg-zinc-300 text-black',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

type ButtonProps = ComponentProps<'button'> &
  ComponentProps<'a'> &
  VariantProps<typeof buttonStyles> & {
    as?: React.ElementType;
  };

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant,
      size,
      isLoading,
      as: Component = 'button',
      className,
      ...props
    },
    ref,
  ) => (
    <Component
      className={cn(buttonStyles({ variant, size, isLoading, className }))}
      ref={ref}
      {...props}
      disabled={!!isLoading || props.disabled}
    >
      {isLoading && (
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {props.children}
    </Component>
  ),
);

Button.displayName = 'Button';
