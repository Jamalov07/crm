import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Branch } from './entities/branch.entity';

@Injectable()
export class BranchesService {
  constructor(@InjectModel(Branch) private branchRepo: typeof Branch) {}

  async create(createBranchDto: CreateBranchDto) {
    const candidate = await this.branchRepo.findOne({
      where: { name: createBranchDto.name },
    });
    if (candidate) {
      throw new BadRequestException('Already exists');
    }
    if (createBranchDto.is_main) {
      await this.branchRepo.update(
        { is_main: false },
        { where: { is_main: true } },
      );
    }
    const newBranch = await this.branchRepo.create(createBranchDto);
    return newBranch;
  }

  async findAll() {
    const branches = await this.branchRepo.findAll();
    return branches;
  }

  async findOne(id: number) {
    const branch = await this.branchRepo.findOne({ where: { id } });
    if (!branch) {
      throw new BadRequestException('Branch not found');
    }
    return branch;
  }

  async update(id: number, updateBranchDto: UpdateBranchDto) {
    const branch = await this.findOne(id);
    if (updateBranchDto.name) {
      const candidate = await this.branchRepo.findOne({
        where: { name: updateBranchDto.name },
      });
      if (candidate && candidate.id !== id) {
        throw new BadRequestException('Already exists');
      }
    }
    if (updateBranchDto.is_main) {
      await this.branchRepo.update(
        { is_main: false },
        { where: { is_main: true } },
      );
    }
    await branch.update(updateBranchDto);
    return branch;
  }

  async remove(id: number) {
    const branch = await this.findOne(id);
    await branch.destroy();
    return { message: 'Branch deleted' };
  }
}
