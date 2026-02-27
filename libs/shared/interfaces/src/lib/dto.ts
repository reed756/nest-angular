import { MealType } from "./enums";
import { PartialType } from "@nestjs/mapped-types";

export class CreateMealDto {
  timestamp!: Date;
  mealType!: MealType;
  notes!: string;
}

export class UpdateMealDto extends PartialType(CreateMealDto) {
  override mealType?: MealType;
  override notes?: string;
}
