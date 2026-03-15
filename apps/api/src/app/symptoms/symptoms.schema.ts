import { symptomCategory, SymptomCategory } from "@nest-angular/interfaces";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Symptom {
  @Prop({ required: true })
  name: string;

  @Prop({ type: String, enum: SymptomCategory, required: true })
  category: symptomCategory;
}

export const SymptomSchema = SchemaFactory.createForClass(Symptom);