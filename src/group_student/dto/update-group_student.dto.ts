import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber } from 'class-validator';

export class UpdateGroupStudentDto {
  @ApiProperty({ example: 2, description: 'student id' })
  @IsOptional()
  @IsNumber()
  student_id: number;
  @ApiProperty({ example: 2, description: 'group id' })
  @IsOptional()
  @IsNumber()
  group_id: number;
}
