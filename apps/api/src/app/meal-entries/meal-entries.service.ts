import { Injectable } from '@nestjs/common';
import { CreateMealEntryDto } from './dto/create-meal-entry.dto';
import { UpdateMealEntryDto } from './dto/update-meal-entry.dto';

@Injectable()
export class MealEntriesService {
  create(createMealEntryDto: CreateMealEntryDto) {
    return 'This action adds a new mealEntry';
  }

  findAll() {
    return `This action returns all mealEntries`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mealEntry`;
  }

  update(id: number, updateMealEntryDto: UpdateMealEntryDto) {
    return `This action updates a #${id} mealEntry`;
  }

  remove(id: number) {
    return `This action removes a #${id} mealEntry`;
  }
}
