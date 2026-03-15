import { FoodAllergen, foodAllergen } from "@nest-angular/interfaces";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Food {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [String], enum: FoodAllergen })
  allergens: foodAllergen[];
}

export const FoodSchema = SchemaFactory.createForClass(Food);