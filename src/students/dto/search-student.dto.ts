import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsNumber, IsString } from 'class-validator';

export class SearchStudentDto {
  @ApiProperty({ example: 'Sardor', description: 'Lid name' })
  @IsOptional()
  @IsString()
  first_name: string;
  @ApiProperty({ example: 'Komilov', description: 'Lid surname' })
  @IsOptional()
  @IsString()
  last_name: string;
  @ApiProperty({ example: '91 001 01 01', description: 'Lid phone number' })
  @IsOptional()
  @IsString()
  phone_number: string;
  @ApiProperty({ example: '12-12-2012', description: 'Lid birthday' })
  @IsOptional()
  @IsDateString()
  birthday: Date;
  @ApiProperty({ example: 'Erkak', description: 'Gender' })
  @IsOptional()
  @IsString()
  gender: string;
}
