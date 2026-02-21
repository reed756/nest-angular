import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SymptomLogsService } from './symptom-logs.service';
import { CreateSymptomLogDto } from './dto/create-symptom-log.dto';
import { UpdateSymptomLogDto } from './dto/update-symptom-log.dto';

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

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSymptomLogDto: UpdateSymptomLogDto,
  ) {
    return this.symptomLogsService.update(+id, updateSymptomLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.symptomLogsService.remove(+id);
  }
}
