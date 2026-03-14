
import { MealType, mealType } from '@nest-angular/interfaces';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MealDocument = HydratedDocument<Meal>;

@Schema({ timestamps: true })
export class Meal {
  @Prop({ required: true })
  userID: string;

  @Prop({ type: String, enum: MealType, required: true })
  mealType: mealType;

  @Prop({ required: true })
  timeEaten: Date;

  @Prop()
  notes: string;
}

export const MealSchema = SchemaFactory.createForClass(Meal);
