import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface PaymentAttrs {
  group_id: number;
  student_id: number;
  payment_date: Date;
  price: number;
  lesson_count: number;
}

@Table({ tableName: 'payments', freezeTableName: true })
export class Payment extends Model<Payment, PaymentAttrs> {
  @ApiProperty({ example: 1, description: 'unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: 'group id' })
  @Column({ type: DataType.INTEGER })
  group_id: number;
  @ApiProperty({ example: 1, description: 'student id' })
  @Column({ type: DataType.INTEGER })
  student_id: number;
  @ApiProperty({ example: '2023-02-02', description: 'payment date' })
  @Column({ type: DataType.DATE })
  payment_date: Date;
  @ApiProperty({ example: 1, description: 'price' })
  @Column({ type: DataType.INTEGER })
  price: number;
  @ApiProperty({ example: 1, description: 'lesson count' })
  @Column({ type: DataType.INTEGER })
  lesson_count: number;
}
