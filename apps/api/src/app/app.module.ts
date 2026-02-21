import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MealsModule } from './meals/meals.module';
import { FoodsModule } from './foods/foods.module';
import { MealEntriesModule } from './meal-entries/meal-entries.module';
import { SymptomsModule } from './symptoms/symptoms.module';
import { SymptomLogsModule } from './symptom-logs/symptom-logs.module';

@Module({
  imports: [
    UsersModule,
    MealsModule,
    FoodsModule,
    MealEntriesModule,
    SymptomsModule,
    SymptomLogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
