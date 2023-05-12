import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Stage } from '../../stages/entities/stage.entity';
import { Status } from '../../status/entities/status.entity';
import { FoundVia } from '../../found_via/entities/found_via.entity';
import { Lesson } from '../../lessons/entities/lesson.entity';
import { Reason } from '../../reasons/entities/reason.entity';

interface LeadAttrs {
  first_name: string;
  last_name: string;
  phone_number: string;
  test_date: Date;
  stage_id: number;
  status_id: number;
  found_via_id: number;
  trial_lesson_id: number;
  cancel_reason_id: number;
}

@Table({ tableName: 'leads', freezeTableName: true })
export class Lead extends Model<Lead, LeadAttrs> {
  @ApiProperty({ example: 1, description: 'unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'John', description: 'lead name' })
  @Column({ type: DataType.STRING })
  first_name: string;
  @ApiProperty({ example: 'Doe', description: 'lead last name' })
  @Column({ type: DataType.STRING })
  last_name: string;
  @ApiProperty({
    example: '+99899 991 11 11',
    description: 'lead phone number',
  })
  @Column({ type: DataType.STRING })
  phone_number: string;
  @ApiProperty({ example: '2023-06-05', description: 'lead test date' })
  @Column({ type: DataType.DATE })
  test_date: Date;
  @ApiProperty({ example: 1, description: 'lead stage id' })
  @ForeignKey(() => Stage)
  @Column({ type: DataType.INTEGER })
  stage_id: number;
  @BelongsTo(() => Stage)
  stage: Stage;
  @ApiProperty({ example: 1, description: 'lead status id' })
  @ForeignKey(() => Status)
  @Column({ type: DataType.INTEGER })
  status_id: number;
  @BelongsTo(() => Status)
  status: Status;
  @ApiProperty({ example: 1, description: 'lead found social id' })
  @ForeignKey(() => FoundVia)
  @Column({ type: DataType.INTEGER })
  found_via_id: number;
  @BelongsTo(() => FoundVia)
  foundvia: FoundVia;
  @ApiProperty({ example: 1, description: 'lead trial lesson id' })
  @ForeignKey(() => Lesson)
  @Column({ type: DataType.INTEGER })
  trial_lesson_id: number;
  @BelongsTo(() => Lesson)
  lesson: Lesson;
  @ApiProperty({ example: 1, description: 'lead reason id' })
  @ForeignKey(() => Reason)
  @Column({ type: DataType.INTEGER })
  cancel_reason_id: number;
  @BelongsTo(() => Reason)
  reason: Reason;
}
