import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Student } from '../../students/entities/student.entity';
import { Group } from '../../groups/entities/group.entity';

interface GroupStudentAttrs {
  student_id: number;
  group_id: number;
}

@Table({ tableName: 'groupstudent', freezeTableName: true })
export class GroupStudent extends Model<GroupStudent, GroupStudentAttrs> {
  @ApiProperty({ example: 1, description: 'unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 2, description: 'student id' })
  @ForeignKey(() => Student)
  @Column({ type: DataType.INTEGER })
  student_id: number;
  @BelongsTo(() => Student)
  student: Student;

  @ApiProperty({ example: 2, description: 'group id' })
  @ForeignKey(() => Group)
  @Column({ type: DataType.INTEGER })
  group_id: number;
  @BelongsTo(() => Group)
  group: Group;
}
