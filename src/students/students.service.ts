import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Student } from './entities/student.entity';
import { Op } from 'sequelize';
import { SearchStudentDto } from './dto/search-student.dto';
@Injectable()
export class StudentsService {
  constructor(@InjectModel(Student) private studentRepo: typeof Student) {}

  async create(createStudentDto: CreateStudentDto) {
    const candidate = await this.studentRepo.findOne({
      where: { lead_id: createStudentDto.lead_id },
    });
    const candidate2 = await this.studentRepo.findOne({
      where: { phone_number: createStudentDto.phone_number },
    });
    if (candidate || candidate2) {
      throw new BadRequestException('This lead already exists in students');
    }
    const newStudent = await this.studentRepo.create(createStudentDto);
    return newStudent;
  }

  async findAll() {
    const students = await this.studentRepo.findAll();
    return students;
  }

  async findOne(id: number) {
    const student = await this.studentRepo.findOne({ where: { id } });
    if (!student) {
      throw new BadRequestException('Student not found');
    }
    return student;
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const student = await this.findOne(id);
    if (updateStudentDto.lead_id || updateStudentDto.phone_number) {
      const candidate = await this.studentRepo.findOne({
        where: { lead_id: updateStudentDto.lead_id || student.lead_id },
      });
      const candidate2 = await this.studentRepo.findOne({
        where: {
          phone_number: updateStudentDto.phone_number || student.phone_number,
        },
      });
      if (
        (candidate && candidate.id !== id) ||
        (candidate2 && candidate2.id !== id)
      ) {
        throw new BadRequestException('This lead already exists in students');
      }
    }
    await student.update(updateStudentDto);
    return student;
  }

  async remove(id: number) {
    const student = await this.findOne(id);
    await student.destroy();
    return { message: 'student deleted' };
  }

  async paginate(page: number) {
    const groups = await this.studentRepo.findAll({
      order: [['createdAt', 'DESC']],
      limit: 10,
      offset: (page - 1) * 10,
    });
    return groups;
  }

  async searchForAdmin(studentBody: SearchStudentDto) {
    const {
      birthday,
      first_name,
      last_name,
      gender,
      phone_number,
    } = studentBody;

    const whereClause: any = {};

    if (birthday) {
      whereClause.birthday = {
        [Op.iLike]: `%${birthday}%`,
      };
    }

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

    if (gender) {
      whereClause.gender = {
        [Op.iLike]: `%${gender}%`,
      };
    }

    if (phone_number) {
      whereClause.phone_number = {
        [Op.iLike]: `%${phone_number}%`,
      };
    }

    const students = await this.studentRepo.findAll({
      include: { all: true },
      where: whereClause,
    });

    return students;
  }
}
