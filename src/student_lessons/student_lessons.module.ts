import { Module } from '@nestjs/common';
import { StudentLessonsService } from './student_lessons.service';
import { StudentLessonsController } from './student_lessons.controller';

@Module({
  controllers: [StudentLessonsController],
  providers: [StudentLessonsService]
})
export class StudentLessonsModule {}
