import { Test, TestingModule } from '@nestjs/testing';
import { ScentCategoriesController } from './scent-categories.controller';

describe('ScentCategoriesController', () => {
  let controller: ScentCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScentCategoriesController],
    }).compile();

    controller = module.get<ScentCategoriesController>(ScentCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
