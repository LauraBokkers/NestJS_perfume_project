import { Controller, Get } from '@nestjs/common';
import { ScentCategoriesService } from './scent-categories.service';

@Controller('scent-categories')
export class ScentCategoriesController {
    constructor(private readonly scentCategoriesService: ScentCategoriesService) { }

    @Get()
    findAll() {
        return this.scentCategoriesService.findAll();
    }
}
