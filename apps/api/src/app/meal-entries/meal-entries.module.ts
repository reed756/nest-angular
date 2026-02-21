import { Module } from '@nestjs/common';
import { MealEntriesService } from './meal-entries.service';
import { MealEntriesController } from './meal-entries.controller';

@Module({
  controllers: [MealEntriesController],
  providers: [MealEntriesService],
})
export class MealEntriesModule {}
