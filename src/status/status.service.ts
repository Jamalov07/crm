import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Status } from './entities/status.entity';

@Injectable()
export class StatusService {
  constructor(@InjectModel(Status) private statusRepo: typeof Status) {}

  async create(createStatusDto: CreateStatusDto) {
    const candidate = await this.statusRepo.findOne({
      where: { name: createStatusDto.name },
    });
    if (candidate) {
      throw new BadRequestException('This status already exists');
    }
    const newStatus = await this.statusRepo.create(createStatusDto);
    return newStatus;
  }

  async findAll() {
    const status = await this.statusRepo.findAll();
    return status;
  }

  async findOne(id: number) {
    const status = await this.statusRepo.findOne({ where: { id } });
    if (!status) {
      throw new BadRequestException('status not found');
    }
    return status;
  }

  async update(id: number, updateStatusDto: UpdateStatusDto) {
    const status = await this.findOne(id);
    if (updateStatusDto.name) {
      const candidate = await this.statusRepo.findOne({
        where: { name: updateStatusDto.name },
      });
      if (candidate && candidate.id !== id) {
        throw new BadRequestException('This status already exists');
      }
    }
    await status.update(updateStatusDto);
    return status;
  }

  async remove(id: number) {
    const status = await this.findOne(id);
    await status.destroy();
    return { message: 'status deleted' };
  }
}
