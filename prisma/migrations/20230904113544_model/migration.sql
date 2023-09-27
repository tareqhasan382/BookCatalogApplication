/*
  Warnings:

  - Changed the type of `ordered_books` on the `orders` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "ordered_books",
ADD COLUMN     "ordered_books" JSONB NOT NULL;
