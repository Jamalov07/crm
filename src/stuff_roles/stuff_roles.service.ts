import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStuffRoleDto } from './dto/create-stuff_role.dto';
import { UpdateStuffRoleDto } from './dto/update-stuff_role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { StuffRole } from './entities/stuff_role.entity';

@Injectable()
export class StuffRolesService {
  constructor(
    @InjectModel(StuffRole) private stuffRoleRepo: typeof StuffRole,
  ) {}
  async create(createStuffRoleDto: CreateStuffRoleDto) {
    const candidate = await this.stuffRoleRepo.findOne({
      where: {
        stuff_id: createStuffRoleDto.stuff_id,
        role_id: createStuffRoleDto.role_id,
      },
    });

    if (candidate) {
      throw new BadRequestException(
        'This student already exists in this group',
      );
    }
    const newStuffRole = await this.stuffRoleRepo.create(createStuffRoleDto);
    return newStuffRole;
  }

  async findAll() {
    const stuffRoles = await this.stuffRoleRepo.findAll();
    return stuffRoles;
  }

  async findOne(id: number) {
    const stuffRole = await this.stuffRoleRepo.findOne({ where: { id } });
    if (!stuffRole) {
      throw new BadRequestException('Group student not found');
    }
    return stuffRole;
  }

  async update(id: number, updateStuffRoleDto: UpdateStuffRoleDto) {
    const stuffRole = await this.findOne(id);
    const candidate = await this.stuffRoleRepo.findOne({
      where: {
        stuff_id: updateStuffRoleDto.stuff_id || stuffRole.stuff_id,
        role_id: updateStuffRoleDto.role_id || stuffRole.role_id,
      },
    });

    if (candidate && candidate.id !== id) {
      throw new BadRequestException(
        'This student already exists in this group',
      );
    }
    await stuffRole.update(updateStuffRoleDto);
  }

  async remove(id: number) {
    const stuffRole = await this.findOne(id);
    await stuffRole.destroy();
    return { message: 'stuff role deleted' };
  }
}
