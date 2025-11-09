/*
  Warnings:

  - You are about to drop the column `image` on the `Cats` table. All the data in the column will be lost.
  - Changed the type of `password` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Cats" DROP COLUMN "image",
ADD COLUMN     "paws" INTEGER NOT NULL DEFAULT 4,
ALTER COLUMN "sale" SET DEFAULT 5;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
ADD COLUMN     "password" INTEGER NOT NULL;
