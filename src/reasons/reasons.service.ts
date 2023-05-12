import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReasonDto } from './dto/create-reason.dto';
import { UpdateReasonDto } from './dto/update-reason.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Reason } from './entities/reason.entity';

@Injectable()
export class ReasonsService {
  constructor(@InjectModel(Reason) private reasonRepo: typeof Reason) {}

  async create(createReasonDto: CreateReasonDto) {
    const candidate = await this.reasonRepo.findOne({
      where: { ...createReasonDto },
    });
    if (candidate) {
      throw new BadRequestException('This reason already exists');
    }
    const newReason = await this.reasonRepo.create(createReasonDto);
    return newReason;
  }

  async findAll() {
    const reasons = await this.reasonRepo.findAll();
    return reasons;
  }

  async findOne(id: number) {
    const reason = await this.reasonRepo.findOne({ where: { id } });
    if (!reason) {
      throw new BadRequestException('Reason not found');
    }
    return reason;
  }

  async update(id: number, updateReasonDto: UpdateReasonDto) {
    const reason = await this.findOne(id);
    const candidate = await this.reasonRepo.findOne({
      where: { ...updateReasonDto },
    });
    if (candidate && candidate.id !== id) {
      throw new BadRequestException('This reason already exists');
    }
    await reason.update(updateReasonDto);
    return reason;
  }

  async remove(id: number) {
    const reason = await this.findOne(id);
    await reason.destroy();
    return { message: 'reason deleted' };
  }

  async paginate(page: number) {
    const groups = await this.reasonRepo.findAll({
      order: [['createdAt', 'DESC']],
      limit: 10,
      offset: (page - 1) * 10,
    });
    return groups;
  }
}
