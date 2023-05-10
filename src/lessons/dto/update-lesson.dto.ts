import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateLessonDto {
  @ApiProperty({ example: 'meeting', description: 'lesson theme' })
  @IsOptional()
  @IsString()
  theme: string;
  @ApiProperty({ example: '2023-12-12', description: 'lesson date' })
  @IsOptional()
  @IsDateString()
  date: Date;
  @ApiProperty({ example: 12, description: 'lesson count' })
  @IsOptional()
  @IsNumber()
  sequence_number: number;
  @ApiProperty({ example: 10, description: 'group id' })
  @IsOptional()
  @IsNumber()
  group_id: number;
}
