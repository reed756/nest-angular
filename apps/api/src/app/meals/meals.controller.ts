import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MealsService } from './meals.service';
import { CreateMealDto, UpdateMealDto } from '@nest-angular/interfaces';
import { Meal } from './meal.schema';

@Controller('meals')
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @Post()
  async create(@Body() createMealDto: CreateMealDto) {
    return this.mealsService.create(createMealDto);
  }

  @Get()
  async findAll(): Promise<Meal[]> {
    return this.mealsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Meal> {
    return this.mealsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMealDto: UpdateMealDto) {
    return this.mealsService.update(id, updateMealDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.mealsService.remove(id);
  }
}
