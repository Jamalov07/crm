import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

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
  @Column({ type: DataType.INTEGER })
  stage_id: number;
  @ApiProperty({ example: 1, description: 'lead status id' })
  @Column({ type: DataType.INTEGER })
  status_id: number;
  @ApiProperty({ example: 1, description: 'lead found social id' })
  @Column({ type: DataType.INTEGER })
  found_via_id: number;
  @ApiProperty({ example: 1, description: 'lead trial lesson id' })
  @Column({ type: DataType.INTEGER })
  trial_lesson_id: number;
  @ApiProperty({ example: 1, description: 'lead reason id' })
  @Column({ type: DataType.INTEGER })
  cancel_reason_id: number;
}
