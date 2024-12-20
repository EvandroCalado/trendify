const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col bg-white">{children}</main>
  );
};

export default AuthLayout;
