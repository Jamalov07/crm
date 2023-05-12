import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

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
  @Column({ type: DataType.INTEGER })
  student_id: number;
  @ApiProperty({ example: 2, description: 'group id' })
  @Column({ type: DataType.INTEGER })
  group_id: number;
}
