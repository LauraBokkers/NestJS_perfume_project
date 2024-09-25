import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AromachemicalsService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createAromachemicalDto: Prisma.AromachemicalCreateInput) {
    return this.databaseService.aromachemical.create({
      data: createAromachemicalDto
    });
  }

  async findAll() {
    return this.databaseService.aromachemical.findMany()
  }

  async findOne(id: number) {
    return this.databaseService.aromachemical.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: number, updateAromachemicalDto: Prisma.AromachemicalUpdateInput) {
    return this.databaseService.aromachemical.update({
      where: {
        id,
      },
      data: updateAromachemicalDto,
    })
  }

  async remove(id: number) {
    return this.databaseService.aromachemical.delete({
      where: {
        id,
      }
    })
  }
}
