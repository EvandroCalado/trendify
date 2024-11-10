'use client';

import { generatePaginationNumbers } from '@/utils';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { FC } from 'react';

type PaginationProps = {
  totalPages: number;
};

export const Pagination: FC<PaginationProps> = ({ totalPages }) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const currentPage = searchParams.get('page') ?? 1;

  if (totalPages <= 1) return null;

  const allPages = generatePaginationNumbers({
    totalPages,
    currentPage: Number(currentPage),
  });

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === '...') {
      return `${pathName}?${params.toString()}`;
    }

    if (Number(pageNumber) <= 0) {
      return `${pathName}`;
    }

    if (Number(pageNumber) > totalPages) {
      return `${pathName}?${params.toString()}`;
    }

    params.set('page', pageNumber.toString());

    return `${pathName}?${params.toString()}`;
  };

  return (
    <div className="flex items-center justify-end border-t border-zinc-300 px-4 py-3 sm:px-6">
      <div>
        <nav
          aria-label="Pagination"
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
        >
          <Link
            href={createPageUrl(Number(currentPage) - 1)}
            className={clsx(
              'relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-zinc-300 hover:bg-zinc-300 focus:z-20 focus:outline-offset-0',
              {
                'pointer-events-none text-zinc-400': Number(currentPage) <= 1,
              },
            )}
          >
            <IconChevronLeft aria-hidden="true" className="h-5 w-5" />
          </Link>

          {allPages.map((page, index) => (
            <Link
              key={`${page}${index}`}
              href={createPageUrl(page)}
              className={clsx(
                'relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-zinc-300 hover:bg-zinc-300 focus:z-20 focus:outline-offset-0',
                {
                  'pointer-events-none bg-blue-700 text-white':
                    page === Number(currentPage),
                },
              )}
            >
              {page}
            </Link>
          ))}

          <Link
            href={createPageUrl(Number(currentPage) + 1)}
            className={clsx(
              'relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset ring-zinc-300 hover:bg-zinc-300 focus:z-20 focus:outline-offset-0',
              {
                'pointer-events-none text-zinc-400':
                  Number(currentPage) >= totalPages,
              },
            )}
          >
            <IconChevronRight aria-hidden="true" className="h-5 w-5" />
          </Link>
        </nav>
      </div>
    </div>
  );
};
