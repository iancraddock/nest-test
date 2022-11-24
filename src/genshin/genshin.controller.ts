import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GenshinService } from './genshin.service';
import { CreateGenshinDto } from './dto/create-genshin.dto';
import { UpdateGenshinDto } from './dto/update-genshin.dto';

@Controller('genshin')
export class GenshinController {
  constructor(private readonly genshinService: GenshinService) {}

  @Post()
  async create(@Body() createGenshinDto: CreateGenshinDto) {
    return this.genshinService.create(createGenshinDto);
  }

  @Get()
  findAll() {
    return this.genshinService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.genshinService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenshinDto: UpdateGenshinDto) {
    return this.genshinService.update(+id, updateGenshinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genshinService.remove(+id);
  }
}
