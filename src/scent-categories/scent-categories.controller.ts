import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ScentCategoriesService } from './scent-categories.service';

@Controller('scent-categories')
export class ScentCategoriesController {
    constructor(private readonly scentCategoriesService: ScentCategoriesService) { }

    @Get()
    findAll() {
        return this.scentCategoriesService.findAll();
    }


    @Post()
    async create(@Body('category') category: string) {
        return this.scentCategoriesService.create(category);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body('category') category: string
    ) {
        return this.scentCategoriesService.editScentCategory(id, category);
    }

}
