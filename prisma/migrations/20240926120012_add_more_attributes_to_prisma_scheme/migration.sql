/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Formula` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Formula` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Formula" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Formula_title_key" ON "Formula"("title");
