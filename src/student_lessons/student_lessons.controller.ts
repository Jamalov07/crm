import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentLessonsService } from './student_lessons.service';
import { CreateStudentLessonDto } from './dto/create-student_lesson.dto';
import { UpdateStudentLessonDto } from './dto/update-student_lesson.dto';

@Controller('student-lessons')
export class StudentLessonsController {
  constructor(private readonly studentLessonsService: StudentLessonsService) {}

  @Post()
  create(@Body() createStudentLessonDto: CreateStudentLessonDto) {
    return this.studentLessonsService.create(createStudentLessonDto);
  }

  @Get()
  findAll() {
    return this.studentLessonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentLessonsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentLessonDto: UpdateStudentLessonDto) {
    return this.studentLessonsService.update(+id, updateStudentLessonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentLessonsService.remove(+id);
  }
}
