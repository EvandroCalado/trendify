/*
  Warnings:

  - You are about to drop the column `size` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "size",
ADD COLUMN     "sizes" "Size"[] DEFAULT ARRAY[]::"Size"[];
