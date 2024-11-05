import { Header } from '@/components/ui';

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
    </main>
  );
};

export default ShopLayout;
