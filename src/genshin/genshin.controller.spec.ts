import { Test, TestingModule } from '@nestjs/testing';
import { GenshinController } from './genshin.controller';
import { GenshinService } from './genshin.service';

describe('GenshinController', () => {
  let controller: GenshinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenshinController],
      providers: [GenshinService],
    }).compile();

    controller = module.get<GenshinController>(GenshinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
