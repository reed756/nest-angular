import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class SymptomLog {
  @Prop({ required: true })
  userID: string;

  @Prop({ required: true })
  symptomID: string;

  @Prop({ required: true })
  timeExperienced: Date;

  @Prop({ required: true })
  severity: number;

  @Prop()
  notes: string;
}

export const SymptomLogSchema = SchemaFactory.createForClass(SymptomLog);
