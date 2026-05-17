import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SymptomLog, SymptomLogSchema } from '../symptom-logs/symptom-logs.schema';
import { Meal, MealSchema } from '../meals/meals.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SymptomLog.name, schema: SymptomLogSchema },
      { name: Meal.name, schema: MealSchema },
    ]),
  ],
})
export class DashboardModule {}
