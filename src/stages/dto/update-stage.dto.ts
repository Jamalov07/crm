import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateStageDto {
  @ApiProperty({ example: 'stage', description: 'stage name' })
  @IsOptional()
  @IsString()
  name: string;
  @ApiProperty({ example: 'about stage', description: 'about stage' })
  @IsOptional()
  @IsString()
  description: string;
}
