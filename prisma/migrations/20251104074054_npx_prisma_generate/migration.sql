/*
  Warnings:

  - You are about to drop the column `email` on the `Cats` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Cats` table. All the data in the column will be lost.
  - Changed the type of `password` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Cats" DROP COLUMN "email",
DROP COLUMN "password";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
ADD COLUMN     "password" INTEGER NOT NULL;
