import Image from 'next/image';
import Link from 'next/link';

export const NotFound = () => {
  return (
    <div className="flex h-[800px] w-full flex-col items-center justify-center align-middle md:flex-row">
      <div className="mx-5 mb-5 px-8 text-center">
        <h2 className="font-title text-7xl md:text-9xl">404</h2>

        <p>Whoops! That page doesn&apos;t exist</p>

        <p className="font-light">
          <span>Back to the </span>
          <Link
            href="/"
            className="font-semibold transition-all hover:underline hover:underline-offset-4"
          >
            Home
          </Link>
        </p>
      </div>

      <div className="px-5">
        <Image
          src="/img/404.svg"
          width={500}
          height={500}
          alt="Back to home"
        />
      </div>
    </div>
  );
};
