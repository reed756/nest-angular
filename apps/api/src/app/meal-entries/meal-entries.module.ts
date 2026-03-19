import { Module } from '@nestjs/common';
import { MealEntriesService } from './meal-entries.service';
import { MealEntriesController } from './meal-entries.controller';
import { MealEntry, MealEntrySchema } from './meal-entries.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: MealEntry.name, schema: MealEntrySchema }])],
  controllers: [MealEntriesController],
  providers: [MealEntriesService],
})
export class MealEntriesModule {}
