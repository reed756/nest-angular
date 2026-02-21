import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MealEntriesService } from './meal-entries.service';
import { CreateMealEntryDto } from './dto/create-meal-entry.dto';
import { UpdateMealEntryDto } from './dto/update-meal-entry.dto';

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

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMealEntryDto: UpdateMealEntryDto,
  ) {
    return this.mealEntriesService.update(+id, updateMealEntryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mealEntriesService.remove(+id);
  }
}
