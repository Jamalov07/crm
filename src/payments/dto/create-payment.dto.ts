import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty({ example: 1, description: 'group id' })
  @IsNotEmpty()
  @IsNumber()
  group_id: number;
  @ApiProperty({ example: 1, description: 'student id' })
  @IsNotEmpty()
  @IsNumber()
  student_id: number;
  @ApiProperty({ example: '2023-02-02', description: 'payment date' })
  @IsNotEmpty()
  @IsDateString()
  payment_date: Date;
  @ApiProperty({ example: 1, description: 'price' })
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @ApiProperty({ example: 1, description: 'lesson count' })
  @IsNotEmpty()
  @IsNumber()
  lesson_count: number;
}
