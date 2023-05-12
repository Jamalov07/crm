import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStudentLessonDto } from './dto/create-student_lesson.dto';
import { UpdateStudentLessonDto } from './dto/update-student_lesson.dto';
import { InjectModel } from '@nestjs/sequelize';
import { StudentLesson } from './entities/student_lesson.entity';

@Injectable()
export class StudentLessonsService {
  constructor(
    @InjectModel(StudentLesson) private studentLessonRepo: typeof StudentLesson,
  ) {}
  async create(createStudentLessonDto: CreateStudentLessonDto) {
    const candidate = await this.studentLessonRepo.findOne({
      where: {
        student_id: createStudentLessonDto.student_id,
        lesson_id: createStudentLessonDto.lesson_id,
      },
    });
    if (candidate) {
      throw new BadRequestException('This attandance already exists');
    }
    const newStudentLesson = await this.studentLessonRepo.create(
      createStudentLessonDto,
    );
    return newStudentLesson;
  }

  async findAll() {
    const studentLessons = await this.studentLessonRepo.findAll();
    return studentLessons;
  }

  async findOne(id: number) {
    const studentLesson = await this.studentLessonRepo.findOne({
      where: { id },
    });
    if (!studentLesson) {
      throw new BadRequestException('Student lesson not found');
    }
    return studentLesson;
  }

  async update(id: number, updateStudentLessonDto: UpdateStudentLessonDto) {
    const studentLesson = await this.findOne(id);
    if (updateStudentLessonDto.student_id || updateStudentLessonDto.lesson_id) {
      const candidate = await this.studentLessonRepo.findOne({
        where: {
          student_id:
            updateStudentLessonDto.student_id || studentLesson.student_id,
          lesson_id:
            updateStudentLessonDto.lesson_id || studentLesson.lesson_id,
        },
      });
      if (candidate && candidate.id !== id) {
        throw new BadRequestException('This attandance already exists');
      }
    }
    await studentLesson.update(updateStudentLessonDto);
    return studentLesson;
  }

  async remove(id: number) {
    const studentLesson = await this.findOne(id);
    await studentLesson.destroy();
    return { message: 'student lesson deleted' };
  }
}
