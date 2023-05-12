import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Group } from '../../groups/entities/group.entity';
import { Student } from '../../students/entities/student.entity';

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
  @ForeignKey(() => Group)
  @Column({ type: DataType.INTEGER })
  group_id: number;
  @BelongsTo(() => Group)
  group: Group;
  @ApiProperty({ example: 1, description: 'student id' })
  @ForeignKey(()=>Student)
  @Column({ type: DataType.INTEGER })
  student_id: number;
  @BelongsTo(() => Student)
  student: Student;
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
