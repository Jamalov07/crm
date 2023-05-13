import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Lead } from './entities/lead.entity';
import { Op } from 'sequelize';
import { SearchLeadDto } from './dto/search-lead.dto';

@Injectable()
export class LeadsService {
  constructor(@InjectModel(Lead) private leadRepo: typeof Lead) {}

  async create(createLeadDto: CreateLeadDto) {
    const candidate = await this.leadRepo.findOne({
      where: { phone_number: createLeadDto.phone_number },
    });
    if (candidate) {
      throw new BadRequestException('Phone number already exists');
    }
    const newLead = await this.leadRepo.create(createLeadDto);
    return newLead;
  }

  async findAll() {
    const leads = await this.leadRepo.findAll();
    return leads;
  }

  async findOne(id: number) {
    const lead = await this.leadRepo.findOne({ where: { id } });
    if (!lead) {
      throw new BadRequestException('Lead not found');
    }
    return lead;
  }

  async update(id: number, updateLeadDto: UpdateLeadDto) {
    const lead = await this.findOne(id);
    if (updateLeadDto.phone_number) {
      const candidate = await this.leadRepo.findOne({
        where: { phone_number: updateLeadDto.phone_number },
      });
      if (candidate && candidate.id !== id) {
        throw new BadRequestException('Phone number already exists');
      }
    }
    await lead.update(updateLeadDto);
    return lead;
  }

  async remove(id: number) {
    const lead = await this.findOne(id);
    await lead.destroy();
    return { message: 'lead deleted' };
  }

  async paginate(page: number) {
    const groups = await this.leadRepo.findAll({
      order: [['createdAt', 'DESC']],
      limit: 10,
      offset: (page - 1) * 10,
    });
    return groups;
  }

  async searchForAdmin(leadBody: SearchLeadDto) {
    const {
      first_name,
      last_name,
      phone_number,
      foundvia_name,
      group_name,
      test_lesson_date,
      test_lesson_time,
      createdAt,
      status_text,
    } = leadBody;

    const whereClause: any = {};

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
    if (phone_number) {
      whereClause.phone_number = {
        [Op.iLike]: `%${phone_number}%`,
      };
    }
    if (foundvia_name) {
      whereClause['$foundvia.name$'] = {
        [Op.iLike]: `%${foundvia_name}%`,
      };
    }

    if (group_name) {
      whereClause['$lesson.group.name$'] = {
        [Op.iLike]: `%${group_name}%`,
      };
    }

    if (test_lesson_time) {
      whereClause['$lesson.group.start_time$'] = {
        [Op.iLike]: `%${test_lesson_time}%`,
      };
    }

    if (createdAt) {
      whereClause.createdAt = {
        [Op.iLike]: `%${createdAt}%`,
      };
    }
    if (status_text) {
      whereClause['$status.name$'] = {
        [Op.iLike]: `%${status_text}%`,
      };
    }

    const leads = await this.leadRepo.findAll({
      include: { all: true },
      where: whereClause,
    });

    return leads;
  }
}
