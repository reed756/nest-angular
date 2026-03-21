import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { SymptomLogsService } from './symptom-logs.service';
import { CreateSymptomLogDto } from '@nest-angular/shared';

@Controller('symptom-logs')
export class SymptomLogsController {
  constructor(private readonly symptomLogsService: SymptomLogsService) {}

  @Post()
  create(@Body() createSymptomLogDto: CreateSymptomLogDto) {
    return this.symptomLogsService.create(createSymptomLogDto);
  }

  @Get()
  findAll() {
    return this.symptomLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.symptomLogsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.symptomLogsService.remove(+id);
  }
}
