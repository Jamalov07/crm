import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateSubjectDto {
  @ApiProperty({ example: 'english', description: 'subject name' })
  @IsOptional()
  @IsString()
  name: string;
}
