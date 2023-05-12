import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';
import { Stuff } from './entities/stuff.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class StuffsService {
  constructor(@InjectModel(Stuff) private stuffRepo: typeof Stuff) {}

  async create(createStuffDto: CreateStuffDto) {
    const candidate = await this.stuffRepo.findOne({
      where: {
        username: createStuffDto.username,
        phone_number: createStuffDto.phone_number,
      },
    });
    if (candidate) {
      throw new BadRequestException('This sutff already exists');
    }
    const newStuff = await this.stuffRepo.create(createStuffDto);
    return newStuff;
  }

  async findAll() {
    const stuffs = await this.stuffRepo.findAll();
    return stuffs;
  }

  async findOne(id: number) {
    const stuff = await this.stuffRepo.findOne({ where: { id } });
    if (!stuff) {
      throw new BadRequestException('Stuff not found');
    }
    return stuff;
  }

  async update(id: number, updateStuffDto: UpdateStuffDto) {
    const stuff = await this.findOne(id);
    if (updateStuffDto.username || updateStuffDto.phone_number) {
      const candidate = await this.stuffRepo.findOne({
        where: {
          username: updateStuffDto.username || stuff.username,
          phone_number: updateStuffDto.phone_number || stuff.phone_number,
        },
      });
      if (candidate && candidate.id !== id) {
        throw new BadRequestException('This sutff already exists');
      }
    }
    await stuff.update(updateStuffDto);
    return stuff;
  }

  async remove(id: number) {
    const stuff = await this.findOne(id);
    await stuff.destroy();
    return { message: 'stuff deleted' };
  }

  async paginate(page: number) {
    const groups = await this.stuffRepo.findAll({
      order: [['createdAt', 'DESC']],
      limit: 10,
      offset: (page - 1) * 10,
    });
    return groups;
  
}
