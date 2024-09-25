import { Module } from '@nestjs/common';
import { AromachemicalsService } from './aromachemicals.service';
import { AromachemicalsController } from './aromachemicals.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AromachemicalsController],
  providers: [AromachemicalsService],
})
export class AromachemicalsModule { }
