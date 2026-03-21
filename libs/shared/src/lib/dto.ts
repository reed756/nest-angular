import { foodAllergen, mealType } from "./enums";
import { PartialType } from "@nestjs/mapped-types";

export class CreateMealDto {
  userID!: string;
  mealType!: mealType;
  timeEaten!: Date;
  notes!: string;
}

export class UpdateMealDto extends PartialType(CreateMealDto) {
  override mealType?: mealType;
  override timeEaten?: Date;
  override notes?: string;
}

export class CreateSymptomDto {
  name!: string;
  category!: string;
}

export class UpdateSymptomDto extends PartialType(CreateSymptomDto) {
  override name?: string;
  override category?: string;
}

export class CreateFoodDto {
  name!: string;
  allergens!: foodAllergen[];
}

export class UpdateFoodDto extends PartialType(CreateFoodDto) {
  override name?: string;
  override allergens?: foodAllergen[];
}

export class CreateMealEntryDto {
  mealID!: string;
  foodID!: string;
}

export class CreateSymptomLogDto {
  userID!: string;
  symptomID!: string;
  timeExperienced!: Date;
  severity!: number;
  notes!: string;
}
