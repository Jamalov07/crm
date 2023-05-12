import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface StudentAttrs {
  first_name: string;
  last_name: string;
  phone_number: string;
  birthday: Date;
  gender: string;
  lead_id: number;
  group_id: number;
  image_link: string;
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
  @Column({ type: DataType.INTEGER })
  lead_id: number;
  @ApiProperty({ example: 'link', description: 'student image link' })
  @Column({ type: DataType.STRING })
  image_link: string;
}
