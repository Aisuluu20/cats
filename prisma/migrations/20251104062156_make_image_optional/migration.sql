/*
  Warnings:

  - You are about to drop the column `email` on the `Cats` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Cats` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Cats` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - Added the required column `price` to the `Cats` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cats" DROP COLUMN "email",
DROP COLUMN "password",
DROP COLUMN "url",
ADD COLUMN     "price" INTEGER NOT NULL,
ALTER COLUMN "image" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "age";
