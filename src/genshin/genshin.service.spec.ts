import { Test, TestingModule } from '@nestjs/testing';
import { GenshinService } from './genshin.service';

describe('GenshinService', () => {
  let service: GenshinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenshinService],
    }).compile();

    service = module.get<GenshinService>(GenshinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
