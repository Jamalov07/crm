import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateStudentLessonDto {
  @ApiProperty({ example: true, description: 'student lesson status' })
  @IsOptional()
  @IsBoolean()
  is_there: boolean;
  @ApiProperty({ example: 'he was ill', description: 'student reason' })
  @IsOptional()
  @IsString()
  reason: string;
  @ApiProperty({ example: true, description: 'student payment status' })
  @IsOptional()
  @IsBoolean()
  be_paid: boolean;
  @ApiProperty({ example: 11, description: 'student id' })
  @IsOptional()
  @IsNumber()
  student_id: number;
  @ApiProperty({ example: 4, description: 'lesson id' })
  @IsOptional()
  @IsNumber()
  lesson_id: number;
  @ApiProperty({ example: true, description: 'student payment status' })
  @IsOptional()
  @IsBoolean()
  is_paid: boolean;
}
