import { MealType } from "./enums";

export interface Meal {
  id: string;
  userID: string;
  timestamp: Date;
  mealType: MealType;
  notes: string;
}
