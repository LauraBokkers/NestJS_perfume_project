import { Test, TestingModule } from '@nestjs/testing';
import { AromachemicalsService } from './aromachemicals.service';

describe('AromachemicalsService', () => {
  let service: AromachemicalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AromachemicalsService],
    }).compile();

    service = module.get<AromachemicalsService>(AromachemicalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
