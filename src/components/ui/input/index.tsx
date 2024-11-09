import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';

const inputStyles = cva(
  [
    'w-full min-h-11',
    'bg-zinc-200',
    'border-[1px] border-zinc-300',
    'py-2 px-4',
    'rounded-md',
    'outline-none',
    'focus:border-blue-700',
    'disabled:opacity-40 disabled:pointer-events-none',
    'transition-all duration-150',
  ],
  {
    variants: {
      error: {
        true: 'border-red-500 dark:border-red-500',
      },
    },
    defaultVariants: {},
  },
);

type InputProps = ComponentProps<'input'> & {
  errorMessage?: string;
} & VariantProps<typeof inputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, error, className, ...props }, ref) => {
    if (errorMessage) {
      error = !!errorMessage;
    }

    return (
      <div>
        <input
          ref={ref}
          {...props}
          className={cn(inputStyles({ error }), className)}
        />
        {errorMessage && (
          <span className="text-xs text-red-500">{errorMessage}</span>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
