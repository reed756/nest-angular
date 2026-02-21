import { Test, TestingModule } from '@nestjs/testing';
import { MealEntriesController } from './meal-entries.controller';
import { MealEntriesService } from './meal-entries.service';

describe('MealEntriesController', () => {
  let controller: MealEntriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MealEntriesController],
      providers: [MealEntriesService],
    }).compile();

    controller = module.get<MealEntriesController>(MealEntriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
