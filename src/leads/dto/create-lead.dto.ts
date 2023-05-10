import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLeadDto {
  @ApiProperty({ example: 'John', description: 'lead name' })
  @IsNotEmpty()
  @IsString()
  first_name: string;
  @ApiProperty({ example: 'Doe', description: 'lead last name' })
  @IsNotEmpty()
  @IsString()
  last_name: string;
  @ApiProperty({
    example: '+99899 991 11 11',
    description: 'lead phone number',
  })
  @IsNotEmpty()
  @IsString()
  phone_number: string;
  @ApiProperty({ example: '2023-06-05', description: 'lead test date' })
  @IsNotEmpty()
  @IsDateString()
  test_date: Date;
  @ApiProperty({ example: 1, description: 'lead stage id' })
  @IsNotEmpty()
  @IsNumber()
  stage_id: number;
  @ApiProperty({ example: 1, description: 'lead status id' })
  @IsNotEmpty()
  @IsNumber()
  status_id: number;
  @ApiProperty({ example: 1, description: 'lead found social id' })
  @IsNotEmpty()
  @IsNumber()
  found_via_id: number;
  @ApiProperty({ example: 1, description: 'lead trial lesson id' })
  @IsNotEmpty()
  @IsNumber()
  trial_lesson_id: number;
  @ApiProperty({ example: 1, description: 'lead reason id' })
  @IsNotEmpty()
  @IsNumber()
  cancel_reason_id: number;
}
