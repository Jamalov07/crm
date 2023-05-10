import { Injectable } from '@nestjs/common';
import { CreateStudentLessonDto } from './dto/create-student_lesson.dto';
import { UpdateStudentLessonDto } from './dto/update-student_lesson.dto';

@Injectable()
export class StudentLessonsService {
  create(createStudentLessonDto: CreateStudentLessonDto) {
    return 'This action adds a new studentLesson';
  }

  findAll() {
    return `This action returns all studentLessons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentLesson`;
  }

  update(id: number, updateStudentLessonDto: UpdateStudentLessonDto) {
    return `This action updates a #${id} studentLesson`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentLesson`;
  }
}
