import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateGenshinDto } from './dto/create-genshin.dto';
import { UpdateGenshinDto } from './dto/update-genshin.dto';
import * as fs from 'fs';
import * as path from 'path';

const readData = (filePath: string): any => {
  const data = fs.readFileSync(filePath, 'utf-8');
  const jsonData = JSON.parse(data);
  return jsonData;
};

const writeData = (filePath: string, data: any): Promise<any> => {
  const jsonData = JSON.stringify(data);
  return fs.promises.writeFile(path.resolve(__dirname, filePath), jsonData);
};

const characterMockPath = path.join(
  process.cwd(),
  'src/genshin',
  'characters.json',
);

interface Characters {
  character: CreateGenshinDto[];
}

@Injectable()
export class GenshinService {
  create(createGenshinDto: CreateGenshinDto): Promise<any> {
    return new Promise(async (resolve) => {
      const characters: Characters = await readData(characterMockPath);

      console.log('..', createGenshinDto);

      const character = characters.character.find(
        (character: { id: number }) => character.id === createGenshinDto.id,
      );

      //console.log('character', character);

      if (!character) {
        characters.character.push(createGenshinDto);
        await writeData(characterMockPath, characters);
        resolve(characters);
      } else {
        resolve({
          character: createGenshinDto,
          error: 'Character already exists!',
          status: new HttpException(
            'Character already exists!',
            HttpStatus.BAD_REQUEST,
          ),
        });
      }
    });
  }

  findAll(): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(await readData(characterMockPath));
    });
  }

  findOne(characterId: number): Promise<any> {
    const id = Number(characterId);
    return new Promise(async (resolve) => {
      const characters = await readData(characterMockPath);

      const character = characters.character.find(
        (character: { id: number }) => character.id === id,
      );
      if (!character) {
        resolve('Character does not exist');
      }
      resolve(character);
    });
  }

  update(id: number, updateGenshinDto: UpdateGenshinDto) {
    return `This action updates a #${id} genshin`;
  }

  remove(id: number) {
    return `This action removes a #${id} genshin`;
  }
}
