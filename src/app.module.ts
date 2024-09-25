import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AromachemicalsModule } from './aromachemicals/aromachemicals.module';
import { FormulasModule } from './formulas/formulas.module';

@Module({
  imports: [AromachemicalsModule, FormulasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
