import { mealType } from "./enums";
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
