import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateFormulaDto, UpdateFormulaDto } from './formulas.controller';

@Injectable()
export class FormulasService {
  constructor(private readonly databaseService: DatabaseService) { }


  async findAll() {
    return this.databaseService.formula.findMany()
  }

  async findOneById(id: number) {
    const formula = await this.databaseService.formula.findUnique({
      where: { id },
      include: {
        formula_line: {
          select: {
            quantity: true,
            aroma_chemical: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    if (!formula) {
      throw new NotFoundException(`Formula with ID '${id}' not found.`);
    }

    return formula;
  }

  async findOneByName(title: string) {
    const formula = await this.databaseService.formula.findUnique({
      where: { title },
      include: {
        formula_line: {
          select: {
            quantity: true,
            aroma_chemical: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    if (!formula) {
      throw new NotFoundException(`Formula with title '${title}' not found.`);
    }

    return formula;
  }

  async findAllByAromachemicalId(aromaChemicalId: number) {
    const formulaLines = await this.databaseService.formulaLine.findMany({
      where: {
        aroma_chemical_id: aromaChemicalId,
      },
      include: {
        formula: {
          select: {
            title: true,
          },
        },
        aroma_chemical: {
          select: {
            name: true,
          },
        },
      },
    });

    if (formulaLines.length === 0) {
      throw new NotFoundException(`No formulas found for Aromachemical with ID '${aromaChemicalId}'.`);
    }

    // Structure the result to group by formula
    const result = formulaLines.reduce((acc, formulaLine) => {
      const formulaTitle = formulaLine.formula.title;

      // Find the existing formula entry or create a new one
      if (!acc[formulaTitle]) {
        acc[formulaTitle] = {
          title: formulaTitle,
          formulaLines: [],
        };
      }

      // Push the current formula line (quantity and aroma_chemical name) into the formulaLines array
      acc[formulaTitle].formulaLines.push({
        aroma_chemical: formulaLine.aroma_chemical.name,
        quantity: formulaLine.quantity,
      });

      return acc;
    }, {});

    // Convert the object to an array
    return Object.values(result);
  }




  async create(createFormulaDto: CreateFormulaDto) {
    return this.databaseService.formula.create({
      data: {
        title: createFormulaDto.title, // Set the formula title
      },
    });
  }




  async update(id: number, updateFormulaDto: UpdateFormulaDto) {
    return this.databaseService.formula.update({
      where: { id },
      data: {
        title: updateFormulaDto.title, // Update the formula title if provided
        formula_line: {
          upsert: updateFormulaDto.formulaLines.map((line) => ({
            where: { id: line.id ?? 0 }, // Use the line ID if updating an existing line, or a default value for new ones
            update: {
              aroma_chemical_id: line.aroma_chemical_id,
              quantity: line.quantity,
            },
            create: {
              aroma_chemical_id: line.aroma_chemical_id,
              quantity: line.quantity,
            },
          })),
        },
      },
      include: {
        formula_line: true,  // Include the updated formula lines in the response
      },
    });
  }


  async remove(id: number) {
    // First, delete all associated FormulaLines
    await this.databaseService.formulaLine.deleteMany({
      where: {
        formula_id: id,  // Delete all FormulaLines where the formula_id matches the given id
      },
    });

    // Now, delete the Formula itself
    return this.databaseService.formula.delete({
      where: {
        id,
      },
    });
  }

}
