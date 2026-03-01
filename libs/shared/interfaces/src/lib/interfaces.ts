import { mealType } from "./enums";

export interface Meal {
  id: string;
  userID: string;
  timestamp: Date;
  mealType: mealType;
  notes: string;
}
