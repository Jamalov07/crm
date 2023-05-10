import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReasonDto {
  @ApiProperty({ example: 'about', description: 'reason full text' })
  @IsNotEmpty()
  @IsString()
  full_text: string;
}
