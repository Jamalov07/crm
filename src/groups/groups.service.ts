import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupsService {
  constructor(@InjectModel(Group) private groupRepo: typeof Group) {}

  async create(createGroupDto: CreateGroupDto) {
    const candidates = await this.groupRepo.findAll({
      where: {
        room_floor: createGroupDto.room_floor,
        room_number: createGroupDto.room_number,
        branch_id: createGroupDto.branch_id,
        start_time: createGroupDto.start_time,
      },
    });

    if (candidates.length) {
      for (let i = 0; i < candidates.length; i++) {
        let weekdays = candidates[i].in_week_days.split(',');
        for (let a = 0; a < weekdays.length; a++) {
          if (createGroupDto.in_week_days.split(',').includes(weekdays[a])) {
            throw new BadRequestException(
              'There is a class in this room on the given days',
            );
          }
        }
      }
    }
    const newGroup = await this.groupRepo.create(createGroupDto);
    return newGroup;
  }

  async findAll() {
    const groups = await this.groupRepo.findAll();
    return groups;
  }

  async findOne(id: number) {
    const group = await this.groupRepo.findOne({ where: { id } });
    if (!group) {
      throw new BadRequestException('Group not found');
    }
    return group;
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    const group = await this.findOne(id);

    if (
      updateGroupDto.room_floor ||
      updateGroupDto.room_number ||
      updateGroupDto.branch_id ||
      updateGroupDto.start_time
    ) {
      const candidates = await this.groupRepo.findAll({
        where: {
          room_floor: updateGroupDto.room_floor || group.room_floor,
          room_number: updateGroupDto.room_number || group.room_number,
          branch_id: updateGroupDto.branch_id || group.branch_id,
          start_time: updateGroupDto.start_time || group.start_time,
        },
      });
      if (candidates.length) {
        for (let i = 0; i < candidates.length; i++) {
          if (candidates[i].id !== id) {
            let weekdays = candidates[i].in_week_days.split(',');
            for (let a = 0; a < weekdays.length; a++) {
              if (
                updateGroupDto.in_week_days.split(',').includes(weekdays[a])
              ) {
                throw new BadRequestException(
                  'There is a class in this room on the given days',
                );
              }
            }
          }
        }
      }
    }
    await group.update(updateGroupDto);
    return group;
  }

  async remove(id: number) {
    const group = await this.findOne(id);
    await group.destroy();
    return { message: 'group deleted' };
  }
}
