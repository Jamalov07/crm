import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSubjectDto {
  @ApiProperty({ example: 'english', description: 'subject name' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
