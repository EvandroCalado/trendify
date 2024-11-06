'use client';

import { useUiStore } from '@/stores/ui';
import {
  IconLogin2,
  IconLogout2,
  IconSearch,
  IconShirt,
  IconTicket,
  IconTruckDelivery,
  IconUser,
  IconUsers,
  IconX,
} from '@tabler/icons-react';
import clsx from 'clsx';
import Link from 'next/link';
import { Separator } from '../Separator';

const userLinks = [
  {
    href: '/account',
    label: 'Account',
    icon: <IconUser />,
  },
  {
    href: '/orders',
    label: 'Orders',
    icon: <IconTicket />,
  },
  {
    href: '/login',
    label: 'Login',
    icon: <IconLogin2 />,
  },
  {
    href: '/logout',
    label: 'Logout',
    icon: <IconLogout2 />,
  },
];

const adminLinks = [
  {
    href: '/products',
    label: 'Products',
    icon: <IconShirt />,
  },
  {
    href: '/orders',
    label: 'Orders',
    icon: <IconTruckDelivery />,
  },
  {
    href: '/users',
    label: 'Users',
    icon: <IconUsers />,
  },
];

export const Menu = () => {
  const { isMenuOpen, toggleMenu } = useUiStore((state) => state);

  return (
    <div>
      {/* fade bg */}
      {isMenuOpen && (
        <div
          className="fixed left-0 top-0 z-10 h-screen w-screen bg-black/30 backdrop-blur-sm"
          onClick={toggleMenu}
        />
      )}

      {/* menu */}
      <nav
        className={clsx(
          'fixed right-0 top-0 z-20 h-screen w-[400px] transform bg-white p-5 shadow-2xl transition-all duration-300 [&>a>svg]:mr-4',
          {
            'translate-x-0': isMenuOpen,
            'translate-x-full': !isMenuOpen,
          },
        )}
      >
        <IconX
          size={30}
          className="absolute right-5 top-5 cursor-pointer transition-all duration-150 hover:text-blue-700"
          onClick={toggleMenu}
        />

        {/* search input */}
        <div className="mt-16 flex items-center rounded border-[1px] border-transparent p-2 transition-all duration-150 focus-within:border-blue-700">
          <IconSearch className="mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none placeholder:text-sm placeholder:font-semibold"
          />
        </div>

        {/* user links */}
        {userLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="mt-10 flex items-center rounded p-2 text-sm font-semibold transition-all hover:bg-zinc-200/50"
            onClick={toggleMenu}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}

        <Separator />

        {/* admin links */}
        {adminLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="mt-10 flex items-center rounded p-2 text-sm font-semibold transition-all hover:bg-zinc-200/50"
            onClick={toggleMenu}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};
