import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Lead } from '../../leads/entities/lead.entity';
import { Status } from '../../status/entities/status.entity';
import { Payment } from '../../payments/entities/payment.entity';
import { StudentLesson } from '../../student_lessons/entities/student_lesson.entity';
import { GroupStudent } from '../../group_student/entities/group_student.entity';

interface StudentAttrs {
  first_name: string;
  last_name: string;
  phone_number: string;
  birthday: Date;
  gender: string;
  lead_id: number;
  group_id: number;
  image_link: string;
  status_id: boolean;
}

@Table({ tableName: 'students', freezeTableName: true })
export class Student extends Model<Student, StudentAttrs> {
  @ApiProperty({ example: 1, description: 'unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'John', description: 'student name' })
  @Column({ type: DataType.STRING })
  first_name: string;
  @ApiProperty({ example: 'Doe', description: 'student last name' })
  @Column({ type: DataType.STRING })
  last_name: string;
  @ApiProperty({
    example: '+99898 888 99 11',
    description: 'student phone number',
  })
  @Column({ type: DataType.STRING })
  phone_number: string;
  @ApiProperty({ example: '2000-12-12', description: 'student birthday' })
  @Column({ type: DataType.DATE })
  birthday: Date;
  @ApiProperty({ example: 'ERKAK', description: 'student gender' })
  @Column({ type: DataType.STRING })
  gender: string;
  @ApiProperty({ example: 2, description: 'lead id' })
  @ForeignKey(() => Lead)
  @Column({ type: DataType.INTEGER })
  lead_id: number;
  @BelongsTo(() => Lead)
  lead: Lead;
  @ApiProperty({ example: 'link', description: 'student image link' })
  @Column({ type: DataType.STRING })
  image_link: string;
  @ApiProperty({ example: 'active', description: 'student status' })
  @ForeignKey(() => Status)
  @Column({ type: DataType.INTEGER })
  status_id: number;
  @BelongsTo(() => Status)
  status: Status;

  @HasMany(() => Payment)
  payments: Payment[];

  @HasMany(() => StudentLesson)
  studentLessons: StudentLesson[];

  @HasMany(() => GroupStudent)
  groups:GroupStudent[];
}
