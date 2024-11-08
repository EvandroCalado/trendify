import { initialData } from '.';
import { prisma } from '../utils/prisma';

async function main() {
  const { categories, products } = initialData;

  console.log('Clearing database...');

  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  console.log('Seeding categories...');

  const categoriesData = categories.map((category) => ({ name: category }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  console.log('Seeding products...');

  const categoriesIds = await prisma.category.findMany();
  const categoriesIdsMap = categoriesIds.reduce(
    (acc, category) => ({
      ...acc,
      [category.name.toLowerCase()]: category.id,
    }),
    {} as Record<string, string>,
  );

  products.forEach(async (product) => {
    const { type, images, ...rest } = product;

    const productDb = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesIdsMap[type.toLowerCase()],
      },
    });

    const imagesData = images.map((image) => ({
      url: image,
      productId: productDb.id,
    }));

    await prisma.productImage.createMany({
      data: imagesData,
    });
  });

  console.log('Finished seeding database.');
}

(() => {
  if (process.env.NODE_ENV === 'production') return;

  main();
})();
