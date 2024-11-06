import { cn } from '@/utils/cn';

type TitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export const Title = ({ title, subtitle, className }: TitleProps) => {
  return (
    <div>
      <h1 className={cn('my-5 font-title text-2xl font-semibold', className)}>
        {title}
      </h1>

      {subtitle && (
        <h3 className="text-sm font-light text-zinc-500">{subtitle}</h3>
      )}
    </div>
  );
};
