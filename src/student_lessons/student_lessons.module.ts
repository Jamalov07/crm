import { Module } from '@nestjs/common';
import { StudentLessonsService } from './student_lessons.service';
import { StudentLessonsController } from './student_lessons.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { StudentLesson } from './entities/student_lesson.entity';

@Module({
  imports:[SequelizeModule.forFeature([StudentLesson])],
  controllers: [StudentLessonsController],
  providers: [StudentLessonsService]
})
export class StudentLessonsModule {}
