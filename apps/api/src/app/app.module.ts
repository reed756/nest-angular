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
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { CatchEverythingFilter } from './exception.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    UsersModule,
    MealsModule,
    FoodsModule,
    MealEntriesModule,
    SymptomsModule,
    SymptomLogsModule,
    AuthModule,
    MongooseModule.forRoot(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: CatchEverythingFilter,
    },
  ],
})
export class AppModule {}
