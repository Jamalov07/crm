import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateReasonDto {
  @ApiProperty({ example: 'about', description: 'reason full text' })
  @IsOptional()
  @IsString()
  full_text: string;
}
