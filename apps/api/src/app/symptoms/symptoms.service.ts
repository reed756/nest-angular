import { Injectable } from '@nestjs/common';
import { Symptom } from './symptoms.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSymptomDto, UpdateSymptomDto } from '@nest-angular/interfaces';

@Injectable()
export class SymptomsService {
  constructor(@InjectModel(Symptom.name) private readonly SymptomModel: Model<Symptom>) {}

  async create(createSymptomDto: CreateSymptomDto) {
    const createdSymptom = await this.SymptomModel.create(createSymptomDto);
    return createdSymptom.save();
  }

  async findAll() {
    return this.SymptomModel.find().exec();
  }

  async findOne(id: number) {
    return this.SymptomModel.findOne({ _id: id }).exec();
  }

  async update(id: number, updateSymptomDto: UpdateSymptomDto) {
    return this.SymptomModel.findByIdAndUpdate({ _id: id }, updateSymptomDto, { new: true }).exec();
  }

  async remove(id: number) {
    const symptomToDelete = await this.SymptomModel.findByIdAndDelete({ _id: id }).exec();
    return symptomToDelete;
  }
}
