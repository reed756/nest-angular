import { Module } from '@nestjs/common';
import { SymptomLogsService } from './symptom-logs.service';
import { SymptomLogsController } from './symptom-logs.controller';

@Module({
  controllers: [SymptomLogsController],
  providers: [SymptomLogsService],
})
export class SymptomLogsModule {}
