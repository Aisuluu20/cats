/*
  Warnings:

  - Added the required column `email` to the `Cats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Cats` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cats" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" INTEGER NOT NULL;
