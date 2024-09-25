-- CreateEnum
CREATE TYPE "OdorStrength" AS ENUM ('Very_weak', 'Weak', 'Medium', 'Strong', 'Very_strong');

-- CreateEnum
CREATE TYPE "Supplier" AS ENUM ('IFF', 'Firmenich', 'Symrise', 'Givaudan', 'Hekserij');

-- CreateEnum
CREATE TYPE "Persistence" AS ENUM ('Top', 'High', 'Middle', 'Bottom', 'Base');

-- CreateEnum
CREATE TYPE "Solvent" AS ENUM ('DPG', 'Perfumers_alcohol', 'IPM');

-- CreateTable
CREATE TABLE "Aromachemical" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "odor_strength" "OdorStrength" NOT NULL,
    "persistence" "Persistence" NOT NULL,
    "dilution_material" "Solvent" NOT NULL,
    "description" TEXT NOT NULL,
    "IFRA_limit" TEXT NOT NULL,
    "supplier" "Supplier" NOT NULL,

    CONSTRAINT "Aromachemical_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScentCategory" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "ScentCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormulaLine" (
    "id" SERIAL NOT NULL,
    "aroma_chemical_id" INTEGER NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "formula_id" INTEGER NOT NULL,

    CONSTRAINT "FormulaLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Formula" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Formula_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AromachemicalToScentCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Aromachemical_name_key" ON "Aromachemical"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_AromachemicalToScentCategory_AB_unique" ON "_AromachemicalToScentCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_AromachemicalToScentCategory_B_index" ON "_AromachemicalToScentCategory"("B");

-- AddForeignKey
ALTER TABLE "FormulaLine" ADD CONSTRAINT "FormulaLine_aroma_chemical_id_fkey" FOREIGN KEY ("aroma_chemical_id") REFERENCES "Aromachemical"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormulaLine" ADD CONSTRAINT "FormulaLine_formula_id_fkey" FOREIGN KEY ("formula_id") REFERENCES "Formula"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AromachemicalToScentCategory" ADD CONSTRAINT "_AromachemicalToScentCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Aromachemical"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AromachemicalToScentCategory" ADD CONSTRAINT "_AromachemicalToScentCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "ScentCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
