import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Group } from './entities/group.entity';
import { ReqWithStuff } from '../interfaces/ReqWithStuff';
import { Op } from 'sequelize';
import { SearchGroupDto } from './dto/search-group.dto';
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

  async paginate(page: number) {
    const groups = await this.groupRepo.findAll({
      order: [['createdAt', 'DESC']],
      limit: 10,
      offset: (page - 1) * 10,
    });
    return groups;
  }

  async paginateForTeacher(page: number, req: ReqWithStuff) {
    const groups = await this.groupRepo.findAll({
      where: {
        stuff_id: req.stuff.id,
      },
      limit: 10,
      offset: (page - 1) * 10,
    });
    const groupsLength = await this.groupRepo.findAll({
      where: {
        stuff_id: req.stuff.id,
      },
    });
    return { groups, totalLength: groupsLength.length };
  }

  async searchForAdmin(groupBody: SearchGroupDto) {
    const {
      teacher_name,
      branch_name,
      room_floor,
      room_number,
      stage_name,
      group_name,
      in_week_days,
      start_time,
      continuous,
    } = groupBody;

    const whereClause: any = {};

    if (teacher_name) {
      whereClause['$stuff.first_name$'] = {
        [Op.iLike]: `%${teacher_name}%`,
      };
    }

    if (branch_name) {
      whereClause['$branch.name$'] = {
        [Op.iLike]: `%${branch_name}%`,
      };
    }

    if (room_floor) {
      whereClause.room_floor = room_floor;
    }
    if (room_number) {
      whereClause.room_number = room_number;
    }

    if (stage_name) {
      whereClause['$stage.name$'] = {
        [Op.iLike]: `%${stage_name}%`,
      };
    }

    if (group_name) {
      whereClause.group_name = {
        [Op.iLike]: `%${group_name}%`,
      };
    }

    if (start_time) {
      whereClause.start_time = {
        [Op.iLike]: `%${start_time}%`,
      };
    }
    if (in_week_days) {
      whereClause.in_week_days = {
        [Op.iLike]: `%${in_week_days}%`,
      };
    }

    if (continuous) {
      whereClause.continuous = {
        [Op.iLike]: `%${continuous}%`,
      };
    }
    const groups = await this.groupRepo.findAll({
      include: { all: true },
      where: whereClause,
    });
    return groups;
  }

  async searchForTeacher(groupBody: SearchGroupDto, req: ReqWithStuff) {
    const { room_number, stage_name, group_name, in_week_days, start_time } =
      groupBody;

    const whereClause: any = {};

    if (room_number) {
      whereClause.room_number = room_number;
    }

    if (stage_name) {
      whereClause['$stage.name$'] = {
        [Op.iLike]: `%${stage_name}%`,
      };
    }

    if (group_name) {
      whereClause.group_name = {
        [Op.iLike]: `%${group_name}%`,
      };
    }

    if (start_time) {
      whereClause.start_time = {
        [Op.iLike]: `%${start_time}%`,
      };
    }
    if (in_week_days) {
      whereClause.in_week_days = {
        [Op.iLike]: `%${in_week_days}%`,
      };
    }

    const groups = await this.groupRepo.findAll({
      include: { all: true },
      where: { ...whereClause, stuff_id: req.stuff.id },
    });
    return groups;
  }
}
