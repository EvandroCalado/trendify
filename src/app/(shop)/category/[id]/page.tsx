import { notFound } from 'next/navigation';

type Props = {
  params: {
    id: string;
  };
};

const CategoryByIdPage = async ({ params }: Props) => {
  const { id } = await params;

  if (id === 'kids') notFound();

  return (
    <div>
      <h1 className="font-title">Category By Id page {id}</h1>
    </div>
  );
};

export default CategoryByIdPage;
