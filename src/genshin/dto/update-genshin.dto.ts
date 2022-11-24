import { PartialType } from '@nestjs/mapped-types';
import { CreateGenshinDto } from './create-genshin.dto';

export class UpdateGenshinDto extends PartialType(CreateGenshinDto) {}
