import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStageDto {
  @ApiProperty({ example: 'stage', description: 'stage name' })
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty({ example: 'about stage', description: 'about stage' })
  @IsNotEmpty()
  @IsString()
  description: string;
}
