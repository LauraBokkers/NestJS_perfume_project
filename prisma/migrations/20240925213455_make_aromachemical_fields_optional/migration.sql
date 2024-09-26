-- AlterTable
ALTER TABLE "Aromachemical" ALTER COLUMN "odor_strength" DROP NOT NULL,
ALTER COLUMN "persistence" DROP NOT NULL,
ALTER COLUMN "dilution_material" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "IFRA_limit" DROP NOT NULL,
ALTER COLUMN "supplier" DROP NOT NULL;
