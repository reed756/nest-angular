import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MealsModule } from './meals/meals.module';
import { FoodsModule } from './foods/foods.module';
import { MealEntriesModule } from './meal-entries/meal-entries.module';
import { SymptomsModule } from './symptoms/symptoms.module';
import { SymptomLogsModule } from './symptom-logs/symptom-logs.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    MealsModule,
    FoodsModule,
    MealEntriesModule,
    SymptomsModule,
    SymptomLogsModule,
    AuthModule,
    MongooseModule.forRoot('mongodb+srv://reedandj1_db_user:jEkJdugppSMa5TQi@cluster0.kb32ifu.mongodb.net/?appName=Cluster0'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
