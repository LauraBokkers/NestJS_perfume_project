/*
  Warnings:

  - Added the required column `key` to the `ScentCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ScentCategory" ADD COLUMN     "key" TEXT NOT NULL;
