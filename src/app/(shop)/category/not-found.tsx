import Link from 'next/link';

const notFoundCategory = () => {
  return (
    <div>
      <h1 className="font-title">404 not found</h1>

      <Link href="/">Back to home</Link>
    </div>
  );
};

export default notFoundCategory;
