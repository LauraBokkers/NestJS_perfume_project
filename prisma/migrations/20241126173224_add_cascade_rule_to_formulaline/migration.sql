-- DropForeignKey
ALTER TABLE "FormulaLine" DROP CONSTRAINT "FormulaLine_aroma_chemical_id_fkey";

-- AddForeignKey
ALTER TABLE "FormulaLine" ADD CONSTRAINT "FormulaLine_aroma_chemical_id_fkey" FOREIGN KEY ("aroma_chemical_id") REFERENCES "Aromachemical"("id") ON DELETE CASCADE ON UPDATE CASCADE;
