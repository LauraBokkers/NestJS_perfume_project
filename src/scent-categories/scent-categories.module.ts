import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ScentCategoriesController } from './scent-categories.controller';
import { ScentCategoriesService } from './scent-categories.service';

@Module({
    imports: [DatabaseModule],
    controllers: [ScentCategoriesController],
    providers: [ScentCategoriesService],
})
export class ScentCategoriesModule { }
