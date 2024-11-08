import { Button, Input, Separator, Title } from '@/components/ui';

const NewAccountPage = () => {
  return (
    <section className="flex flex-1 items-center justify-center px-5">
      <div className="w-[350px]">
        <Title title="Sign up" />

        <label className="text-sm font-semibold">
          Name
          <Input type="text" />
        </label>
        <label className="mt-5 block text-sm font-semibold">
          Email
          <Input type="email" />
        </label>
        <label className="mt-5 block text-sm font-semibold">
          Password
          <Input type="password" />
        </label>

        <Button className="mt-5 w-full">Sign up</Button>

        <Separator middleText="or" className="my-5" />

        <Button
          variant="secondary"
          as="a"
          href="/auth/login"
          className="w-full"
        >
          Enter to you account
        </Button>
      </div>
    </section>
  );
};

export default NewAccountPage;
