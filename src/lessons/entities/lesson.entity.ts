import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

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
  @Column({ type: DataType.INTEGER })
  group_id: number;
}
