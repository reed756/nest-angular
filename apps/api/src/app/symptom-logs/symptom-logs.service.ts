import { CreateSymptomLogDto } from '@nest-angular/shared';
import { Injectable } from '@nestjs/common';
import { SymptomLog } from './symptom-logs.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SymptomLogsService {
  constructor(@InjectModel(SymptomLog.name) private readonly SymptomLogModel: Model<SymptomLog>) {}

  async create(createSymptomLogDto: CreateSymptomLogDto) {
    const createdSymptomLog = await this.SymptomLogModel.create(createSymptomLogDto);
    return createdSymptomLog.save();
  }

  async findAll() {
    return this.SymptomLogModel.find().exec();
  }

  async findOne(id: number) {
    return this.SymptomLogModel.findOne({ _id: id }).exec();
  }

  async remove(id: number) {
    const symptomLogToDelete = await this.SymptomLogModel.findByIdAndDelete({ _id: id }).exec();
    return symptomLogToDelete;
  }
}
