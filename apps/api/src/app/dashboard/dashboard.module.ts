import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SymptomLog, SymptomLogSchema } from '../symptom-logs/symptom-logs.schema';
import { Meal, MealSchema } from '../meals/meals.schema';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';

@Module({
  controllers: [DashboardController],
  imports: [
    MongooseModule.forFeature([
      { name: SymptomLog.name, schema: SymptomLogSchema },
      { name: Meal.name, schema: MealSchema },
    ]),
  ],
  providers: [DashboardService,],
})
export class DashboardModule {}
