import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class SearchStuffDto {
  @ApiProperty({ example: 'Sardor', description: 'Lid name' })
  @IsOptional()
  @IsString()
  full_name: string;
  @ApiProperty({ example: 'Komilov', description: 'Lid surname' })
  @IsOptional()
  @IsString()
  groups_count: string;
  @ApiProperty({ example: '91 001 01 01', description: 'Lid phone number' })
  @IsOptional()
  @IsString()
  students_count: string;
  @ApiProperty({ example: '91 001 01 01', description: 'Lid phone number' })
  @IsOptional()
  @IsString()
  incoming_leads_count: string;
  @ApiProperty({ example: '91 001 01 01', description: 'Lid phone number' })
  @IsOptional()
  @IsString()
  outgoing_leads_count: string;
}
