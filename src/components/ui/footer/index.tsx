import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center py-8 text-sm">
      <Link href="/">
        <span className="font-title font-semibold">Trendify</span>
        <span> | Shop</span>
        <span> &copy; {new Date().getFullYear()}</span>
      </Link>
    </footer>
  );
};
