import { Test, TestingModule } from '@nestjs/testing';
import { SymptomLogsService } from './symptom-logs.service';

describe('SymptomLogsService', () => {
  let service: SymptomLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SymptomLogsService],
    }).compile();

    service = module.get<SymptomLogsService>(SymptomLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
