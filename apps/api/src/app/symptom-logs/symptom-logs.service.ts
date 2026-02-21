import { Injectable } from '@nestjs/common';
import { CreateSymptomLogDto } from './dto/create-symptom-log.dto';
import { UpdateSymptomLogDto } from './dto/update-symptom-log.dto';

@Injectable()
export class SymptomLogsService {
  create(createSymptomLogDto: CreateSymptomLogDto) {
    return 'This action adds a new symptomLog';
  }

  findAll() {
    return `This action returns all symptomLogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} symptomLog`;
  }

  update(id: number, updateSymptomLogDto: UpdateSymptomLogDto) {
    return `This action updates a #${id} symptomLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} symptomLog`;
  }
}
