import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLessonDto {
  @ApiProperty({ example: 'meeting', description: 'lesson theme' })
  @IsNotEmpty()
  @IsString()
  theme: string;
  @ApiProperty({ example: '2023-12-12', description: 'lesson date' })
  @IsNotEmpty()
  @IsDateString()
  date: Date;
  @ApiProperty({ example: 12, description: 'lesson count' })
  @IsNotEmpty()
  @IsNumber()
  sequence_number: number;
  @ApiProperty({ example: 10, description: 'group id' })
  @IsNotEmpty()
  @IsNumber()
  group_id: number;
}
