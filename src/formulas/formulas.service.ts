import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class FormulasService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createFormulaDto: Prisma.FormulaCreateInput) {
    return this.databaseService.formula.create({
      data: createFormulaDto
    });
  }

  async findAll() {
    return this.databaseService.formula.findMany()
  }

  async findOne(id: number) {
    return this.databaseService.formula.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: number, updateFormulaDto: Prisma.FormulaUpdateInput) {
    return this.databaseService.formula.update({
      where: {
        id,
      },
      data: updateFormulaDto,
    })
  }

  async remove(id: number) {
    return this.databaseService.formula.delete({
      where: {
        id,
      }
    })
  }
}
