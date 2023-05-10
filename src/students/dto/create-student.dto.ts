import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({ example: 'John', description: 'student name' })
  @IsNotEmpty()
  @IsString()
  first_name: string;
  @ApiProperty({ example: 'Doe', description: 'student last name' })
  @IsNotEmpty()
  @IsString()
  last_name: string;
  @ApiProperty({
    example: '+99898 888 99 11',
    description: 'student phone number',
  })
  @IsNotEmpty()
  @IsString()
  phone_number: string;
  @ApiProperty({ example: '2000-12-12', description: 'student birthday' })
  @IsNotEmpty()
  @IsDateString()
  birthday: Date;
  @ApiProperty({ example: 'ERKAK', description: 'student gender' })
  @IsNotEmpty()
  @IsString()
  gender: string;
  @ApiProperty({ example: 2, description: 'lead id' })
  @IsNotEmpty()
  @IsNumber()
  lead_id: number;
  @ApiProperty({ example: 2, description: 'student group' })
  @IsNotEmpty()
  @IsNumber()
  group_id: number;
  @ApiProperty({ example: 'link', description: 'student image link' })
  @IsNotEmpty()
  @IsString()
  image_link: string;
}
