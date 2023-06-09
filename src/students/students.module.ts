import { Student } from './entities/student.entity';
import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[SequelizeModule.forFeature([Student])],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
