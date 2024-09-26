import { Injectable, NotFoundException } from '@nestjs/common';
import { OdorStrength, Persistence, Prisma, Supplier } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AromachemicalsService {
  constructor(private readonly databaseService: DatabaseService) { }

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

  async findBySupplier(supplier: Supplier) {
    return this.databaseService.aromachemical.findMany({
      where: {
        supplier: supplier
      }
    })
  }

  async findByOdorStrength(odor_strength: OdorStrength) {
    return this.databaseService.aromachemical.findMany({
      where: {
        odor_strength: odor_strength
      }
    })
  }



  async createAromachemical(createAromachemicalDto: Prisma.AromachemicalCreateInput) {
    return this.databaseService.aromachemical.create({
      data: createAromachemicalDto
    });
  }


  async createScentCategory(createScentCategoryDto: Prisma.ScentCategoryCreateInput) {
    return this.databaseService.scentCategory.create({
      data: createScentCategoryDto
    });
  }



  async updateAromachecimal(id: number, updateAromachemicalDto: Prisma.AromachemicalUpdateInput) {
    return this.databaseService.aromachemical.update({
      where: {
        id,
      },
      data: updateAromachemicalDto,
    })
  }


  async updateScentCategory(id: number, updateScentCategoryDto: Prisma.ScentCategoryUpdateInput) {
    return this.databaseService.scentCategory.update({
      where: {
        id,
      },
      data: updateScentCategoryDto,
    })
  }




  async removeAromachemical(id: number) {
    return this.databaseService.aromachemical.delete({
      where: {
        id,
      }
    })
  }

  async removeScentCategory(id: number) {
    return this.databaseService.scentCategory.delete({
      where: {
        id,
      }
    })
  }

}
