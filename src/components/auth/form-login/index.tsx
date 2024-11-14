'use client';

import { authenticate } from '@/actions/auth/login';
import { Button, Input, Separator } from '@/components/ui';
import { useFormState } from 'react-dom';

export const FormLogin = () => {
  const [state, dispatch] = useFormState(authenticate, undefined);

  console.log(state);

  return (
    <form action={dispatch}>
      <label className="text-sm font-semibold">
        Email
        <Input type="email" name="email" />
      </label>
      <label className="mt-5 block text-sm font-semibold">
        Password
        <Input type="password" name="password" />
      </label>

      <Button type="submit" className="mt-5 w-full">
        Sign in
      </Button>

      <Separator middleText="or" className="my-5" />

      <Button
        variant="secondary"
        as="a"
        href="/auth/new-account"
        className="w-full"
      >
        Create account
      </Button>
    </form>
  );
};
