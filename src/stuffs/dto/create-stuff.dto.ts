import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateStuffDto {
  @ApiProperty({ example: 'John', description: 'stuff name' })
  @IsNotEmpty()
  @IsString()
  first_name: string;
  @ApiProperty({ example: 'Doe', description: 'stuff last name' })
  @IsNotEmpty()
  @IsString()
  last_name: string;
  @ApiProperty({
    example: '+99890 009 09 09',
    description: 'stuff phone number',
  })
  @IsNotEmpty()
  @IsString()
  phone_number: string;
  @ApiProperty({ example: 'John001', description: 'stuff username' })
  @IsNotEmpty()
  @IsString()
  username: string;
  @ApiProperty({ example: '001nhoJ', description: 'stuff password' })
  @IsNotEmpty()
  @IsString()
  password: string;
  @ApiProperty({ example: true, description: 'stuff status' })
  @IsNotEmpty()
  @IsBoolean()
  is_active: boolean;
  @ApiProperty({ example: 'link', description: 'stuff image link' })
  @IsNotEmpty()
  @IsString()
  image: string;
}
