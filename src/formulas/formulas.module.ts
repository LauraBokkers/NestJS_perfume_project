import { Module } from '@nestjs/common';
import { FormulasService } from './formulas.service';
import { FormulasController } from './formulas.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FormulasController],
  providers: [FormulasService],
})
export class FormulasModule { }
