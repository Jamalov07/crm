import { Module } from '@nestjs/common';
import { GroupStudentService } from './group_student.service';
import { GroupStudentController } from './group_student.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { GroupStudent } from './entities/group_student.entity';

@Module({
  imports: [SequelizeModule.forFeature([GroupStudent])],
  controllers: [GroupStudentController],
  providers: [GroupStudentService],
})
export class GroupStudentModule {}
