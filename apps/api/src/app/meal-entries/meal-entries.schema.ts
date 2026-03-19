import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class MealEntry {
  @Prop({ required: true })
  mealID: string;

  @Prop({ required: true })
  foodID: string;
}

export const MealEntrySchema = SchemaFactory.createForClass(MealEntry);