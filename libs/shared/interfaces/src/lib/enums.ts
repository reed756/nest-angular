export const MealType = {
  Breakfast: "Breakfast",
  Lunch: "Lunch",
  Dinner: "Dinner",
  Snack: "Snack",
} as const;

export type mealType = typeof MealType[keyof typeof MealType];

export const SymptomCategory = {
  Gastrointestinal: "Gastrointestinal",
  Neurological: "Neurological",
  Dermatological: "Dermatological",
  Respiratory: "Respiratory",
  Musculoskeletal: "Musculoskeletal",
  Cardiovascular: "Cardiovascular",
  Psychological: "Psychological",
}

export type symptomCategory = typeof SymptomCategory[keyof typeof SymptomCategory];