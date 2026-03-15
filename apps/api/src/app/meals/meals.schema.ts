
import { MealType, mealType } from '@nest-angular/shared';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
