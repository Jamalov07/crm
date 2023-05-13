import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class SearchGroupDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  teacher_name?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  branch_name?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  room_floor?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  room_number?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  stage_name?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  group_name?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  start_time?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  continuous?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  in_week_days?: string;
}
