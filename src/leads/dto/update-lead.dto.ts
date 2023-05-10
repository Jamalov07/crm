import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateLeadDto {
  @ApiProperty({ example: 'John', description: 'lead name' })
  @IsOptional()
  @IsString()
  first_name: string;
  @ApiProperty({ example: 'Doe', description: 'lead last name' })
  @IsOptional()
  @IsString()
  last_name: string;
  @ApiProperty({
    example: '+99899 991 11 11',
    description: 'lead phone number',
  })
  @IsOptional()
  @IsString()
  phone_number: string;
  @ApiProperty({ example: '2023-06-05', description: 'lead test date' })
  @IsOptional()
  @IsDateString()
  test_date: Date;
  @ApiProperty({ example: 1, description: 'lead stage id' })
  @IsOptional()
  @IsNumber()
  stage_id: number;
  @ApiProperty({ example: 1, description: 'lead status id' })
  @IsOptional()
  @IsNumber()
  status_id: number;
  @ApiProperty({ example: 1, description: 'lead found social id' })
  @IsOptional()
  @IsNumber()
  found_via_id: number;
  @ApiProperty({ example: 1, description: 'lead trial lesson id' })
  @IsOptional()
  @IsNumber()
  trial_lesson_id: number;
  @ApiProperty({ example: 1, description: 'lead reason id' })
  @IsOptional()
  @IsNumber()
  cancel_reason_id: number;
}
