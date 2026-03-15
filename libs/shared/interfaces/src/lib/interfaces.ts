import { foodAllergen, mealType, symptomCategory } from "./enums";

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

export interface Food {
  id: string;
  name: string;
  allergens: foodAllergen[];
}