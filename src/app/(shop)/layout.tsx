import { Header } from '@/components/ui';

const ShopLayout = ({ children }: { children: React.ReactNode }) => (
  <main className="min-h-screen">
    <Header />
    {children}
  </main>
);

export default ShopLayout;
