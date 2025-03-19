import { Test, TestingModule } from '@nestjs/testing';
import { ScentCategoriesService } from './scent-categories.service';

describe('ScentCategoriesService', () => {
  let service: ScentCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScentCategoriesService],
    }).compile();

    service = module.get<ScentCategoriesService>(ScentCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
