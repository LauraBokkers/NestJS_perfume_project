import { Test, TestingModule } from '@nestjs/testing';
import { AromachemicalsController } from './aromachemicals.controller';
import { AromachemicalsService } from './aromachemicals.service';

describe('AromachemicalsController', () => {
  let controller: AromachemicalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AromachemicalsController],
      providers: [AromachemicalsService],
    }).compile();

    controller = module.get<AromachemicalsController>(AromachemicalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
