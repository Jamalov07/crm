import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFoundViaDto } from './dto/create-found_via.dto';
import { UpdateFoundViaDto } from './dto/update-found_via.dto';
import { FoundVia } from './entities/found_via.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class FoundViaService {
  constructor(@InjectModel(FoundVia) private foundViaRepo: typeof FoundVia) {}

  async create(createFoundViaDto: CreateFoundViaDto) {
    const candidate = await this.foundViaRepo.findOne({
      where: { name: createFoundViaDto.name },
    });
    if (candidate) {
      throw new BadRequestException('Already exists');
    }
    const foundvia = await this.foundViaRepo.create(createFoundViaDto);
    return foundvia;
  }

  async findAll() {
    const foundvias = await this.foundViaRepo.findAll();
    return foundvias;
  }

  async findOne(id: number) {
    const foundvia = await this.foundViaRepo.findOne({ where: { id } });
    if (!foundvia) {
      throw new BadRequestException('found via not found');
    }
    return foundvia;
  }

  async update(id: number, updateFoundViaDto: UpdateFoundViaDto) {
    const foundvia = await this.findOne(id);
    if (updateFoundViaDto.name) {
      const candidate = await this.foundViaRepo.findOne({
        where: { name: updateFoundViaDto.name },
      });
      if (candidate && candidate.id !== id) {
        throw new BadRequestException('Already exists');
      }
    }
    await foundvia.update(updateFoundViaDto);
    return foundvia;
  }

  async remove(id: number) {
    const foundvia = await this.findOne(id);
    await foundvia.destroy();
    return { message: 'found via deleted' };
  }
}
