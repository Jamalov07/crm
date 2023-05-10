import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsNumber } from 'class-validator';

export class UpdatePaymentDto {
  @ApiProperty({ example: 1, description: 'group id' })
  @IsOptional()
  @IsNumber()
  group_id: number;
  @ApiProperty({ example: 1, description: 'student id' })
  @IsOptional()
  @IsNumber()
  student_id: number;
  @ApiProperty({ example: '2023-02-02', description: 'payment date' })
  @IsOptional()
  @IsDateString()
  payment_date: Date;
  @ApiProperty({ example: 1, description: 'price' })
  @IsOptional()
  @IsNumber()
  price: number;
  @ApiProperty({ example: 1, description: 'lesson count' })
  @IsOptional()
  @IsNumber()
  lesson_count: number;
}
