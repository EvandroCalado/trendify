import { Header, Menu } from '@/components/ui';

const ShopLayout = ({ children }: { children: React.ReactNode }) => (
  <main className="flex min-h-screen flex-col">
    <Header />
    <Menu />
    {children}
  </main>
);

export default ShopLayout;
