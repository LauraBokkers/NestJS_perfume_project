import { Injectable, NotFoundException } from '@nestjs/common';
import { Persistence, Prisma } from '@prisma/client';
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

  async findByCategory(category: string) {

    // Validation: Check if the category exists
    const categoryExists = await this.databaseService.scentCategory.findFirst({
      where: { category },
    });

    if (!categoryExists) {
      throw new NotFoundException(`Category '${category}' does not exist.`);
    }

    return this.databaseService.aromachemical.findMany({
      where: {
        scent_category: {
          some: {
            key: categoryExists.category
          }
        }
      }
    })
  }

  async findByPersistence(persistence: Persistence) {
    return this.databaseService.aromachemical.findMany({
      where: {
        persistence: persistence
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
