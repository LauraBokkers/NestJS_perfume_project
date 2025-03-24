import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { OdorStrength, Persistence, Prisma, Supplier } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';


@Injectable()
export class ScentCategoriesService {

    constructor(private readonly databaseService: DatabaseService) { }


    async findAll() {
        return this.databaseService.scentCategory.findMany();
    }


    // Add scent-category
    async create(category: string) {
        const key = category.toLowerCase().replace(/\s+/g, '_');

        try {
            return await this.databaseService.scentCategory.create({
                data: {
                    category,
                    key,
                },
            });
        } catch (error) {
            throw new ConflictException('Category already exists');
        }
    }


    // Edit scent-category
    async editScentCategory(id: number, category: string) {
        const key = category.toLowerCase().replace(/\s+/g, "_");

        return await this.databaseService.scentCategory.update({
            where: { id },
            data: { category, key },
        });
    }




}
