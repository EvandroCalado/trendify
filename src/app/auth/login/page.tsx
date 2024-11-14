import { FormLogin } from '@/components/auth';
import { Title } from '@/components/ui';

const LoginPage = () => {
  return (
    <section className="relative flex flex-1 items-center justify-center px-5">
      <Title
        title="Trendify"
        className="absolute left-5 top-5 font-title capitalize"
      />

      <div className="w-[350px]">
        <Title title="Login" />

        <FormLogin />
      </div>
    </section>
  );
};

export default LoginPage;
