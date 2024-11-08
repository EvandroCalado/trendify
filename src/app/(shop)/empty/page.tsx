import Image from 'next/image';
import Link from 'next/link';

const EmptyPage = () => {
  return (
    <section className="mx-auto flex w-full max-w-screen-xl flex-1 flex-col items-center justify-center gap-5 px-5">
      <Image src="/img/empty.svg" width={300} height={300} alt="" />

      <h2 className="text-2xl font-semibold">Your cart is empty</h2>
      <Link
        href="/"
        className="text-blue-700 underline underline-offset-4 duration-150 hover:text-blue-800"
      >
        Back to shop
      </Link>
    </section>
  );
};

export default EmptyPage;
