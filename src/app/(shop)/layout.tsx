import { Header, Menu } from '@/components/ui';

const ShopLayout = ({ children }: { children: React.ReactNode }) => (
  <main className="min-h-screen">
    <Header />
    <Menu />
    {children}
  </main>
);

export default ShopLayout;
