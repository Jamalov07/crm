import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateGroupStudentDto {
  @ApiProperty({ example: 2, description: 'student id' })
  @IsNotEmpty()
  @IsNumber()
  student_id: number;
  @ApiProperty({ example: 2, description: 'group id' })
  @IsNotEmpty()
  @IsNumber()
  group_id: number;
}
