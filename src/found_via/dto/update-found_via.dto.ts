import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateFoundViaDto {
  @ApiProperty({ example: 'facebook', description: 'social name' })
  @IsOptional()
  @IsString()
  name: string;
}
