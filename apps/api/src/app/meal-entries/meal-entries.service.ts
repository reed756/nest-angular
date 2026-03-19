import { CreateMealEntryDto } from '@nest-angular/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MealEntry } from './meal-entries.schema';
import { Model } from 'mongoose';

@Injectable()
export class MealEntriesService {
  constructor(@InjectModel(MealEntry.name) private readonly MealEntriesModel: Model<MealEntry>) {}

  async create(createMealEntryDto: CreateMealEntryDto): Promise<MealEntry> {
    const createdMeal = await this.MealEntriesModel.create(createMealEntryDto);
    return createdMeal.save();
  }

  async findAll(): Promise<MealEntry[]> {
    return this.MealEntriesModel.find().exec();
  }

  async findOne(id: number): Promise<MealEntry> {
    return this.MealEntriesModel.findOne({ _id: id }).exec();
  }

  async remove(id: number): Promise<MealEntry> {
    const mealToDelete = await this.MealEntriesModel.findByIdAndDelete({ _id: id }).exec();
    return mealToDelete;
  }
}
