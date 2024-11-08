import { Button, Input, Separator, Title } from '@/components/ui';

const LoginPage = () => {
  return (
    <section className="flex flex-1 items-center justify-center px-5">
      <div className="w-[350px]">
        <Title title="Login" />

        <label className="text-sm font-semibold">
          Email
          <Input type="email" />
        </label>
        <label className="mt-5 block text-sm font-semibold">
          Password
          <Input type="password" />
        </label>

        <Button className="mt-5 w-full">Sign in</Button>

        <Separator middleText="or" className="my-5" />

        <Button
          variant="secondary"
          as="a"
          href="/auth/new-account"
          className="w-full"
        >
          Create account
        </Button>
      </div>
    </section>
  );
};

export default LoginPage;
