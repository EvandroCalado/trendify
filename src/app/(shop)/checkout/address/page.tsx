import { Button, Input, Title } from '@/components/ui';

const AddressPage = () => {
  return (
    <section className="mx-auto w-full max-w-screen-xl flex-1 px-5">
      <Title title="Address" subtitle="Add your shipping address" />

      <div className="mb-5 flex w-full items-center gap-5 max-md:flex-col">
        <label className="flex w-full flex-col text-xs font-semibold">
          Name
          <Input />
        </label>
        <label className="flex w-full flex-col text-xs font-semibold">
          Nickname
          <Input />
        </label>
      </div>

      <div className="mb-5 flex w-full items-center gap-5 max-md:flex-col">
        <label className="flex w-full flex-col text-xs font-semibold">
          Address
          <Input />
        </label>
        <label className="flex w-full flex-col text-xs font-semibold">
          Address 2 (optional)
          <Input />
        </label>
      </div>

      <div className="mb-5 flex w-full items-center gap-5 max-md:flex-col">
        <label className="flex w-full flex-col text-xs font-semibold">
          Zip code
          <Input />
        </label>
        <label className="flex w-full flex-col text-xs font-semibold">
          City
          <Input />
        </label>
      </div>

      <div className="mb-5 flex w-full items-center gap-5 max-md:flex-col">
        <label className="flex w-full flex-col text-xs font-semibold">
          Country
          <Input />
        </label>
        <label className="flex w-full flex-col text-xs font-semibold">
          Phone
          <Input />
        </label>
      </div>

      <Button
        as="a"
        href="/checkout"
        className="w-max px-32 max-md:w-full md:mt-14"
      >
        Checkout
      </Button>
    </section>
  );
};

export default AddressPage;
