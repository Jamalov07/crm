import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGroupDto {
  @ApiProperty({ example: 'beginners', description: 'group name' })
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty({ example: '07:00', description: 'lesson start time' })
  @IsNotEmpty()
  @IsString()
  start_time: string;
  @ApiProperty({ example: 120, description: 'lesson continuous time' })
  @IsNotEmpty()
  @IsNumber()
  continuous: number;
  @ApiProperty({ example: '1,2,3,4,5', description: 'lesson in week days' })
  @IsNotEmpty()
  @IsString()
  in_week_days: string;
  @ApiProperty({ example: 1, description: 'room number' })
  @IsNotEmpty()
  @IsNumber()
  room_number: number;
  @ApiProperty({ example: 1, description: 'room floor' })
  @IsNotEmpty()
  @IsNumber()
  room_floor: number;
  @ApiProperty({ example: 'Google', description: 'room name' })
  @IsNotEmpty()
  @IsString()
  room_name: string;
  @ApiProperty({ example: 20, description: 'lesson total quant' })
  @IsNotEmpty()
  @IsNumber()
  total_quant: number;
  @ApiProperty({ example: 120000, description: 'price for one lesson' })
  @IsNotEmpty()
  @IsNumber()
  price_for_one_lesson: number;
  @ApiProperty({ example: 4, description: 'group stage id' })
  @IsNotEmpty()
  @IsNumber()
  stage_id: number;
  @ApiProperty({ example: 2, description: 'stuff id' })
  @IsNotEmpty()
  @IsNumber()
  stuff_id: number;
  @ApiProperty({ example: 3, description: 'branch id' })
  @IsNotEmpty()
  @IsNumber()
  branch_id: number;
  @ApiProperty({ example: 42, description: 'subject id' })
  @IsNotEmpty()
  @IsNumber()
  subject_id: number;
}
