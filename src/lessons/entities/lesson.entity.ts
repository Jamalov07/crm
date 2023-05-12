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
import { Group } from '../../groups/entities/group.entity';
import { Lead } from '../../leads/entities/lead.entity';
import { StudentLesson } from '../../student_lessons/entities/student_lesson.entity';

interface LessonAttrs {
  theme: string;
  date: Date;
  sequence_number: number;
  group_id: number;
}

@Table({ tableName: 'lessons', freezeTableName: true })
export class Lesson extends Model<Lesson, LessonAttrs> {
  @ApiProperty({ example: 1, description: 'unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'meeting', description: 'lesson theme' })
  @Column({ type: DataType.STRING })
  theme: string;
  @ApiProperty({ example: '2023-12-12', description: 'lesson date' })
  @Column({ type: DataType.DATE })
  date: Date;
  @ApiProperty({ example: 12, description: 'lesson count' })
  @Column({ type: DataType.INTEGER })
  sequence_number: number;
  @ApiProperty({ example: 10, description: 'group id' })
  @ForeignKey(() => Group)
  @Column({ type: DataType.INTEGER })
  group_id: number;
  @BelongsTo(() => Group)
  group: Group;

  @HasMany(() => Lead)
  leads: Lead[];

  @HasMany(() => StudentLesson)
  studentLessons: StudentLesson[];
}
