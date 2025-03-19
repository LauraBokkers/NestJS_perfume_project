import { Injectable, NotFoundException } from '@nestjs/common';
import { OdorStrength, Persistence, Prisma, Supplier } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';


@Injectable()
export class ScentCategoriesService {

    constructor(private readonly databaseService: DatabaseService) { }


    async findAll() {
        return this.databaseService.scentCategory.findMany();
    }


}
