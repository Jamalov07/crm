import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateGroupDto {
  @ApiProperty({ example: 'beginners', description: 'group name' })
  @IsOptional()
  @IsString()
  name: string;
  @ApiProperty({ example: '07:00', description: 'lesson start time' })
  @IsOptional()
  @IsString()
  start_time: string;
  @ApiProperty({ example: 120, description: 'lesson continuous time' })
  @IsOptional()
  @IsNumber()
  continuous: number;
  @ApiProperty({ example: '1,2,3,4,5', description: 'lesson in week days' })
  @IsOptional()
  @IsString()
  in_week_days: string;
  @ApiProperty({ example: 1, description: 'room number' })
  @IsOptional()
  @IsNumber()
  room_number: number;
  @ApiProperty({ example: 1, description: 'room floor' })
  @IsOptional()
  @IsNumber()
  room_floor: number;
  @ApiProperty({ example: 'Google', description: 'room name' })
  @IsOptional()
  @IsString()
  room_name: string;
  @ApiProperty({ example: 20, description: 'lesson total quant' })
  @IsOptional()
  @IsNumber()
  total_quant: number;
  @ApiProperty({ example: 120000, description: 'price for one lesson' })
  @IsOptional()
  @IsNumber()
  price_for_one_lesson: number;
  @ApiProperty({ example: 4, description: 'group stage id' })
  @IsOptional()
  @IsNumber()
  stage_id: number;
  @ApiProperty({ example: 2, description: 'stuff id' })
  @IsOptional()
  @IsNumber()
  stuff_id: number;
  @ApiProperty({ example: 3, description: 'branch id' })
  @IsOptional()
  @IsNumber()
  branch_id: number;
  @ApiProperty({ example: 42, description: 'subject id' })
  @IsOptional()
  @IsNumber()
  subject_id: number;
}
