import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateFoundViaDto {
  @ApiProperty({ example: 'facebook', description: 'social name' })
  @IsOptional()
  @IsString()
  name: string;
}
