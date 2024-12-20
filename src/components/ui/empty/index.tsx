import Image from 'next/image';
import Link from 'next/link';

export const Empty = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <Image src="/img/empty.svg" width={300} height={300} alt="empty" />

      <h2 className="text-2xl font-semibold">Your cart is empty</h2>
      <Link
        href="/"
        className="text-blue-700 underline underline-offset-4 duration-150 hover:text-blue-800"
      >
        Back to shop
      </Link>
    </div>
  );
};
