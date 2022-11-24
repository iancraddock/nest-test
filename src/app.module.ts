import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { GenshinModule } from './genshin/genshin.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [CoursesModule, GenshinModule],
})
export class AppModule {}
