import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFoundViaDto {
  @ApiProperty({ example: 'facebook', description: 'social name' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
