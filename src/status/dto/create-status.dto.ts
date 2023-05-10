import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStatusDto {
  @ApiProperty({ example: 'Status', description: 'Status name' })
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty({ example: 'about Status', description: 'about Status' })
  @IsNotEmpty()
  @IsString()
  description: string;
}
