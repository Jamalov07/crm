import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateStudentDto {
  @ApiProperty({ example: 'John', description: 'student name' })
  @IsOptional()
  @IsString()
  first_name: string;
  @ApiProperty({ example: 'Doe', description: 'student last name' })
  @IsOptional()
  @IsString()
  last_name: string;
  @ApiProperty({
    example: '+99898 888 99 11',
    description: 'student phone number',
  })
  @IsOptional()
  @IsString()
  phone_number: string;
  @ApiProperty({ example: '2000-12-12', description: 'student birthday' })
  @IsOptional()
  @IsDateString()
  birthday: Date;
  @ApiProperty({ example: 'ERKAK', description: 'student gender' })
  @IsOptional()
  @IsString()
  gender: string;
  @ApiProperty({ example: 2, description: 'lead id' })
  @IsOptional()
  @IsNumber()
  lead_id: number;
  @ApiProperty({ example: 2, description: 'student group' })
  @IsOptional()
  @IsNumber()
  group_id: number;
  @ApiProperty({ example: 'link', description: 'student image link' })
  @IsOptional()
  @IsString()
  image_link: string;
}
