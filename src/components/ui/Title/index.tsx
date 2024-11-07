import { cn } from '@/utils/cn';

type TitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export const Title = ({ title, subtitle, className }: TitleProps) => {
  return (
    <div className="my-5 space-y-5 md:my-10">
      <h1 className={cn('font-title text-2xl font-bold uppercase', className)}>
        {title}
      </h1>

      {subtitle && <h3 className="text-sm">{subtitle}</h3>}
    </div>
  );
};
