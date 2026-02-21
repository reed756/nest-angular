import { PartialType } from '@nestjs/mapped-types';
import { CreateMealEntryDto } from './create-meal-entry.dto';

export class UpdateMealEntryDto extends PartialType(CreateMealEntryDto) {}
