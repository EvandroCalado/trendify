import { Title } from '@/components/ui';
import { IconCreditCard } from '@tabler/icons-react';
import Link from 'next/link';

const OrdersPage = () => {
  return (
    <section className="mx-auto w-full max-w-screen-xl px-5">
      <Title title="Orders" />

      <div className="mb-10">
        <table className="min-w-full">
          <thead className="border-b bg-zinc-200">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 text-left text-sm font-medium text-zinc-900"
              >
                #ID
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-sm font-medium text-zinc-900"
              >
                Full name
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-sm font-medium text-zinc-900"
              >
                State
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-sm font-medium text-zinc-900"
              >
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-white transition duration-300 ease-in-out hover:bg-zinc-200/20">
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-zinc-900">
                1
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-zinc-900">
                Mark
              </td>
              <td className="flex items-center whitespace-nowrap px-6 py-4 text-sm font-light text-zinc-900">
                <IconCreditCard className="text-green-700" />
                <span className="mx-2 text-green-800">Paid</span>
              </td>
              <td className="px-6 text-sm font-light text-zinc-900">
                <Link
                  href="/orders/123"
                  className="hover:underline hover:underline-offset-4"
                >
                  Order
                </Link>
              </td>
            </tr>

            <tr className="border-b bg-white transition duration-300 ease-in-out hover:bg-zinc-200/20">
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-zinc-900">
                1
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-zinc-900">
                Mark
              </td>
              <td className="flex items-center whitespace-nowrap px-6 py-4 text-sm font-light text-zinc-900">
                <IconCreditCard className="text-red-700" />
                <span className="mx-2 text-red-800">Not paid</span>
              </td>
              <td className="px-6 text-sm font-light text-zinc-900">
                <Link
                  href="/orders/123"
                  className="hover:underline hover:underline-offset-4"
                >
                  Order
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OrdersPage;
