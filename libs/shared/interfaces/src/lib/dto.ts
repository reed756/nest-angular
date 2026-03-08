import { mealType } from "./enums";
import { PartialType } from "@nestjs/mapped-types";

export class CreateMealDto {
  userID!: string;
  mealType!: mealType;
  notes!: string;
}

export class UpdateMealDto extends PartialType(CreateMealDto) {
  override mealType?: mealType;
  override notes?: string;
}
