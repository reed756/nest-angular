import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { MealEntriesService } from './meal-entries.service';
import { CreateMealEntryDto } from '@nest-angular/shared';

@Controller('meal-entries')
export class MealEntriesController {
  constructor(private readonly mealEntriesService: MealEntriesService) {}

  @Post()
  create(@Body() createMealEntryDto: CreateMealEntryDto) {
    return this.mealEntriesService.create(createMealEntryDto);
  }

  @Get()
  findAll() {
    return this.mealEntriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mealEntriesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mealEntriesService.remove(+id);
  }
}
