import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface StudentLessonAttrs {
  is_there: boolean;
  reason: string;
  be_paid: boolean;
  student_id: number;
  lesson_id: number;
  is_paid: boolean;
}

@Table({ tableName: 'studentlessons', freezeTableName: true })
export class StudentLesson extends Model<StudentLesson, StudentLessonAttrs> {
  @ApiProperty({ example: 1, description: 'unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: true, description: 'student lesson status' })
  @Column({ type: DataType.BOOLEAN })
  is_there: boolean;
  @ApiProperty({ example: 'he was ill', description: 'student reason' })
  @Column({ type: DataType.STRING })
  reason: string;
  @ApiProperty({ example: true, description: 'student payment status' })
  @Column({ type: DataType.BOOLEAN })
  be_paid: boolean;
  @ApiProperty({ example: 11, description: 'student id' })
  @Column({ type: DataType.INTEGER })
  student_id: number;
  @ApiProperty({ example: 4, description: 'lesson id' })
  @Column({ type: DataType.INTEGER })
  lesson_id: number;
  @ApiProperty({ example: true, description: 'student payment status' })
  @Column({ type: DataType.BOOLEAN })
  is_paid: boolean;
}
