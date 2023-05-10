import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateStatusDto {
  @ApiProperty({ example: 'Status', description: 'Status name' })
  @IsOptional()
  @IsString()
  name: string;
  @ApiProperty({ example: 'about Status', description: 'about Status' })
  @IsOptional()
  @IsString()
  description: string;
}
