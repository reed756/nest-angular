export const MealType = {
  Breakfast: "Breakfast",
  Lunch: "Lunch",
  Dinner: "Dinner",
  Snack: "Snack",
} as const;

export type MealType = typeof MealType[keyof typeof MealType];