import { Module } from '@nestjs/common';
import { GenshinService } from './genshin.service';
import { GenshinController } from './genshin.controller';

@Module({
  controllers: [GenshinController],
  providers: [GenshinService],
})
export class GenshinModule {}
