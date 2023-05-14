import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';
import { Stuff } from './entities/stuff.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { JwtService } from '@nestjs/jwt';
import { SearchStuffDto } from './dto/search-stuff.dto';

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

  async searchTeachers(teacherBody:SearchStuffDto) {
    const {
      full_name,
      groups_count,
      students_count,
      incoming_leads_count,
      outgoing_leads_count,
    } = teacherBody;
    let first_name = full_name.split(' ')[0];
    let last_name = full_name.split(' ')[1] || '';

    let whereClause: any = {};

    if (first_name) {
      whereClause.first_name = {
        [Op.iLike]: `%${first_name}%`,
      };
    }
    if (last_name) {
      whereClause.last_name = {
        [Op.iLike]: `%${last_name}%`,
      };
    }

    const teachers = await this.stuffRepo.findAll({
      where: { ...whereClause },
      include: { all: true },
    });

    let check1: any = [];
    for (let i = 0; i < teachers.length; i++) {
      let sort = [];
      for (let a = 0; i < teachers[i].stuffRoles.length; a++) {
        sort.push(teachers[i].stuffRoles[a].role.name);
      }
      if (sort.includes('TEACHER')) {
        check1.push(teachers[i]);
      }
    }

    let check2: any = [];
    if (groups_count) {
      for (let i = 0; i < check1.length; i++) {
        if (check1[i].groups.length == groups_count) {
          check2.push(check1[i]);
        }
      }
    }

    let check3: any = [];
    if (students_count) {
      let checkingArray = groups_count ? check2 : check1;
      for (let i = 0; i < checkingArray.length; i++) {
        let studentcount = 0;
        for (let a = 0; a < checkingArray[i].groups.length; a++) {
          studentcount += checkingArray[i].groups[a].students.length;
        }
        if (studentcount == students_count) {
          check3.push(checkingArray[i]);
        }
      }
    }

    let check4: any = [];
    if (incoming_leads_count) {
      let checkingArray = students_count
        ? check3
        : groups_count
        ? check2
        : check1;

      for (let i = 0; i < checkingArray.length; i++) {
        let incomingleads = 0;
        for (let a = 0; a < checkingArray[i].groups.length; a++) {
          for (let b = 0; b < checkingArray[i].groups[a].lessons.length; b++) {
            for (
              let c = 0;
              c < checkingArray[i].groups[a].lessons[b].leads.length;
              c++
            ) {
              if (
                checkingArray[i].groups[a].lessons[b].leads[c].status.name ===
                "Student bo'lgan"
              ) {
                incomingleads++;
              }
            }
          }
        }
        if (incoming_leads_count == incomingleads) {
          check4.push(checkingArray[i]);
        }
      }
    }

    let check5: any = [];
    if (outgoing_leads_count) {
      let checkingArray = students_count
        ? check3
        : groups_count
        ? check2
        : check1;

      for (let i = 0; i < checkingArray.length; i++) {
        let outgoingleads = 0;
        for (let a = 0; a < checkingArray[i].groups.length; a++) {
          for (let b = 0; b < checkingArray[i].groups[a].lessons.length; b++) {
            for (
              let c = 0;
              c < checkingArray[i].groups[a].lessons[b].leads.length;
              c++
            ) {
              if (
                checkingArray[i].groups[a].lessons[b].leads[c].status.name ===
                'Inkor qilgan'
              ) {
                outgoingleads++;
              }
            }
          }
        }
        if (outgoing_leads_count == outgoingleads) {
          check5.push(checkingArray[i]);
        }
      }
    }

    return outgoing_leads_count
      ? check5
      : incoming_leads_count
      ? check4
      : students_count
      ? check3
      : groups_count
      ? check2
      : check1;
  }

  async check_token(token: string) {
    try {
      const data = new JwtService().verify(token, {
        secret: process.env.ACCESS_TOKEN_KEY,
      });

      if (data) {
        if (data.id && data.role_id) {
          const stuff = await this.stuffRepo.findOne({
            where: { id: data.id },
            include: { all: true },
          });
          if (stuff) {
            return {
              isValid: true,
              tokenData: data,
              stuff: stuff,
            };
          }
        }
      }
      return { isValid: false };
    } catch (error) {
      return { isValid: false, message: error };
    }
  }
}
