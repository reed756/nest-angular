import { Module } from '@nestjs/common';
import { SymptomLogsService } from './symptom-logs.service';
import { SymptomLogsController } from './symptom-logs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SymptomLog, SymptomLogSchema } from './symptom-logs.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: SymptomLog.name, schema: SymptomLogSchema }])],
  controllers: [SymptomLogsController],
  providers: [SymptomLogsService],
})
export class SymptomLogsModule {}
