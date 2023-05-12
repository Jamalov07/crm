import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateGroupStudentDto } from './dto/create-group_student.dto';
import { UpdateGroupStudentDto } from './dto/update-group_student.dto';
import { InjectModel } from '@nestjs/sequelize';
import { GroupStudent } from './entities/group_student.entity';

@Injectable()
export class GroupStudentService {
  constructor(
    @InjectModel(GroupStudent) private groupStudentRepo: typeof GroupStudent,
  ) {}
  async create(createGroupStudentDto: CreateGroupStudentDto) {
    const candidate = await this.groupStudentRepo.findOne({
      where: {
        group_id: createGroupStudentDto.group_id,
        student_id: createGroupStudentDto.student_id,
      },
    });

    if (candidate) {
      throw new BadRequestException(
        'This student already exists in this group',
      );
    }
    const newGroupStudent = await this.groupStudentRepo.create(
      createGroupStudentDto,
    );
    return newGroupStudent;
  }

  async findAll() {
    const groupStudents = await this.groupStudentRepo.findAll();
    return groupStudents;
  }

  async findOne(id: number) {
    const groupStudent = await this.groupStudentRepo.findOne({ where: { id } });
    if (!groupStudent) {
      throw new BadRequestException('Group student not found');
    }
    return groupStudent;
  }

  async update(id: number, updateGroupStudentDto: UpdateGroupStudentDto) {
    const groupStudent = await this.findOne(id);
    const candidate = await this.groupStudentRepo.findOne({
      where: {
        group_id: updateGroupStudentDto.group_id || groupStudent.group_id,
        student_id: updateGroupStudentDto.student_id || groupStudent.student_id,
      },
    });

    if (candidate && candidate.id !== id) {
      throw new BadRequestException(
        'This student already exists in this group',
      );
    }
    await groupStudent.update(updateGroupStudentDto);
  }

  async remove(id: number) {
    const groupStudent = await this.findOne(id);
    await groupStudent.destroy();
    return { message: 'group student deleted' };
  }
}
