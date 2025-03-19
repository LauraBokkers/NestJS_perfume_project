import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AromachemicalsModule } from './aromachemicals/aromachemicals.module';
import { FormulasModule } from './formulas/formulas.module';
import { ScentCategoriesModule } from './scent-categories/scent-categories.module';

@Module({
  imports: [AromachemicalsModule, FormulasModule, ScentCategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
