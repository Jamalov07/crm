import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStudentLessonDto {
  @ApiProperty({ example: true, description: 'student lesson status' })
  @IsNotEmpty()
  @IsBoolean()
  is_there: boolean;
  @ApiProperty({ example: 'he was ill', description: 'student reason' })
  @IsNotEmpty()
  @IsString()
  reason: string;
  @ApiProperty({ example: true, description: 'student payment status' })
  @IsNotEmpty()
  @IsBoolean()
  be_paid: boolean;
  @ApiProperty({ example: 11, description: 'student id' })
  @IsNotEmpty()
  @IsNumber()
  student_id: number;
  @ApiProperty({ example: 4, description: 'lesson id' })
  @IsNotEmpty()
  @IsNumber()
  lesson_id: number;
  @ApiProperty({ example: true, description: 'student payment status' })
  @IsNotEmpty()
  @IsBoolean()
  is_paid: boolean;
}
