import { Module } from '@nestjs/common';
import { SymptomsService } from './symptoms.service';
import { SymptomsController } from './symptoms.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Symptom, SymptomSchema } from './symptoms.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Symptom.name, schema: SymptomSchema }])],
  controllers: [SymptomsController],
  providers: [SymptomsService],
})
export class SymptomsModule {}
