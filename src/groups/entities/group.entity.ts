import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface GroupAttrs {
  name: string;
  start_time: string;
  continuous: number;
  in_week_days: string;
  room_number: number;
  room_floor: number;
  room_name: string;
  total_quant: number;
  price_for_one_lesson: number;
  stage_id: number;
  stuff_id: number;
  branch_id: number;
  subject_id: number;
}

@Table({ tableName: 'groups', freezeTableName: true })
export class Group extends Model<Group, GroupAttrs> {
  @ApiProperty({ example: 1, description: 'unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'beginners', description: 'group name' })
  @Column({ type: DataType.STRING })
  name: string;
  @ApiProperty({ example: '07:00', description: 'lesson start time' })
  @Column({ type: DataType.STRING })
  start_time: string;
  @ApiProperty({ example: 120, description: 'lesson continuous time' })
  @Column({ type: DataType.INTEGER })
  continuous: number;
  @ApiProperty({ example: '1,2,3,4,5', description: 'lesson in week days' })
  @Column({ type: DataType.STRING })
  in_week_days: string;
  @ApiProperty({ example: 1, description: 'room number' })
  @Column({ type: DataType.INTEGER })
  room_number: number;
  @ApiProperty({ example: 1, description: 'room floor' })
  @Column({ type: DataType.INTEGER })
  room_floor: number;
  @ApiProperty({ example: 'Google', description: 'room name' })
  @Column({ type: DataType.STRING })
  room_name: string;
  @ApiProperty({ example: 20, description: 'lesson total quant' })
  @Column({ type: DataType.INTEGER })
  total_quant: number;
  @ApiProperty({ example: 120000, description: 'price for one lesson' })
  @Column({ type: DataType.INTEGER })
  price_for_one_lesson: number;
  @ApiProperty({ example: 4, description: 'group stage id' })
  @Column({ type: DataType.INTEGER })
  stage_id: number;
  @ApiProperty({ example: 2, description: 'stuff id' })
  @Column({ type: DataType.INTEGER })
  stuff_id: number;
  @ApiProperty({ example: 3, description: 'branch id' })
  @Column({ type: DataType.INTEGER })
  branch_id: number;
  @ApiProperty({ example: 42, description: 'subject id' })
  @Column({ type: DataType.INTEGER })
  subject_id: number;
}
