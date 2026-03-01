
import { mealType } from '@nest-angular/interfaces';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MealDocument = HydratedDocument<Meal>;

@Schema()
export class Meal {
  @Prop()
  id: string;

  @Prop()
  userID: string;

  @Prop()
  timestamp: Date;

  @Prop()
  mealType: mealType;

  @Prop()
  notes: string;
}

export const MealSchema = SchemaFactory.createForClass(Meal);
