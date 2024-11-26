/*
  Warnings:

  - A unique constraint covering the columns `[category]` on the table `ScentCategory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[key]` on the table `ScentCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ScentCategory_category_key" ON "ScentCategory"("category");

-- CreateIndex
CREATE UNIQUE INDEX "ScentCategory_key_key" ON "ScentCategory"("key");
