import { IconSearch, IconShoppingCart } from '@tabler/icons-react';
import Link from 'next/link';

const links = [
  {
    href: '/category/man',
    label: 'Mans',
  },
  {
    href: '/category/woman',
    label: 'Womans',
  },
  {
    href: '/category/kids',
    label: 'Kids',
  },
];

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between p-5">
      {/* logo */}
      <Link href="/" className="flex items-center gap-4">
        <span className="font-title font-bold">Trendify</span>
        <span>|</span>
        <span className="text-sm font-semibold">Shop</span>
      </Link>

      {/* nav menu */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-4 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-4 py-2 transition-all hover:bg-zinc-200/50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* search, cart, menu */}
      <div className="flex items-center gap-4">
        <Link href="/search" className="mr-4">
          <IconSearch />
        </Link>

        <Link href="/cart">
          <div className="relative">
            <span className="absolute -right-1.5 -top-1.5 rounded-full bg-blue-700 px-1 text-xs text-white">
              3
            </span>
            <IconShoppingCart />
          </div>
        </Link>

        <button className="rounded-md px-4 py-2 text-sm transition-all hover:bg-zinc-200/50">
          Menu
        </button>
      </div>
    </header>
  );
};
