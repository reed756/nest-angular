import { Test, TestingModule } from '@nestjs/testing';
import { SymptomLogsController } from './symptom-logs.controller';
import { SymptomLogsService } from './symptom-logs.service';

describe('SymptomLogsController', () => {
  let controller: SymptomLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SymptomLogsController],
      providers: [SymptomLogsService],
    }).compile();

    controller = module.get<SymptomLogsController>(SymptomLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
