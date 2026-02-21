import { Test, TestingModule } from '@nestjs/testing';
import { MealEntriesService } from './meal-entries.service';

describe('MealEntriesService', () => {
  let service: MealEntriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealEntriesService],
    }).compile();

    service = module.get<MealEntriesService>(MealEntriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
