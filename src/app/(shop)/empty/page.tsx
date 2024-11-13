import { Empty } from '@/components/ui';

const EmptyPage = () => {
  return (
    <section className="mx-auto flex w-full max-w-screen-xl flex-1 flex-col items-center justify-center gap-5 px-5">
      <Empty />
    </section>
  );
};

export default EmptyPage;
