import { mealType, symptomCategory } from "./enums";

export interface Meal {
  id: string;
  userID: string;
  timeEaten: Date;
  mealType: mealType;
  notes: string;
}

export interface Symptom {
  id: string;
  name: string;
  category: symptomCategory;
}