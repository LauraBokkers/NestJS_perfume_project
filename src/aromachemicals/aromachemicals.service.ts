import { Injectable, NotFoundException } from '@nestjs/common';
import { OdorStrength, Persistence, Prisma, Supplier } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AromachemicalsService {
  constructor(private readonly databaseService: DatabaseService) { }

  async findAll() {
    return this.databaseService.aromachemical.findMany({
      include: {
        scent_category: {
          select: {
            id: true,
            category: true
          }
        }
      }
    })
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



  async updateAromachemical(id: number, updateAromachemicalDto: Prisma.AromachemicalUpdateInput) {
    // Validation: Check if the Aromachemical exists before updating
    const aromachemical = await this.databaseService.aromachemical.findUnique({
      where: { id },
    });

    if (!aromachemical) {
      throw new NotFoundException(`Aromachemical with ID '${id}' not found.`);
    }

    return this.databaseService.aromachemical.update({
      where: {
        id,
      },
      data: updateAromachemicalDto,
    });
  }


  async updateScentCategory(id: number, updateScentCategoryDto: Prisma.ScentCategoryUpdateInput) {
    // Validation: Check if the Scent Category exists before updating
    const scentCategory = await this.databaseService.scentCategory.findUnique({
      where: { id },
    });

    if (!scentCategory) {
      throw new NotFoundException(`Scent Category with ID '${id}' not found.`);
    }

    return this.databaseService.scentCategory.update({
      where: {
        id,
      },
      data: updateScentCategoryDto,
    });
  }


  async removeAromachemical(id: number) {
    // Validation: Check if the Aromachemical exists before deletion
    const aromachemical = await this.databaseService.aromachemical.findUnique({
      where: { id },
    });

    if (!aromachemical) {
      throw new NotFoundException(`Aromachemical with ID '${id}' not found.`);
    }

    return this.databaseService.aromachemical.delete({
      where: {
        id,
      },
    });
  }


  async removeScentCategory(id: number) {
    // Validation: Check if the Scent Category exists before deletion
    const scentCategory = await this.databaseService.scentCategory.findUnique({
      where: { id },
    });

    if (!scentCategory) {
      throw new NotFoundException(`Scent Category with ID '${id}' not found.`);
    }

    return this.databaseService.scentCategory.delete({
      where: {
        id,
      },
    });
  }

}
