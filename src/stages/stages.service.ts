import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Stage } from './entities/stage.entity';

@Injectable()
export class StagesService {
  constructor(@InjectModel(Stage) private stageRepo: typeof Stage) {}

  async create(createStageDto: CreateStageDto) {
    const candidate = await this.stageRepo.findOne({
      where: { name: createStageDto.name },
    });
    if (candidate) {
      throw new BadRequestException('This stage already exists');
    }
    const newStage = await this.stageRepo.create(createStageDto);
    return newStage;
  }

  async findAll() {
    const stages = await this.stageRepo.findAll();
    return stages;
  }

  async findOne(id: number) {
    const stage = await this.stageRepo.findOne({ where: { id } });
    if (!stage) {
      throw new BadRequestException('Stage not found');
    }
    return stage;
  }

  async update(id: number, updateStageDto: UpdateStageDto) {
    const stage = await this.findOne(id);
    if (updateStageDto.name) {
      const candidate = await this.stageRepo.findOne({
        where: { name: updateStageDto.name },
      });
      if (candidate && candidate.id !== id) {
        throw new BadRequestException('This stage already exists');
      }
    }
    await stage.update(updateStageDto);
    return stage;
  }

  async remove(id: number) {
    const stage = await this.findOne(id);
    await stage.destroy();
    return { message: 'stage deleted' };
  }
}
