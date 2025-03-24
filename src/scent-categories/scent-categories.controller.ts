import { Body, Controller, Get, Post } from '@nestjs/common';
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


}
