import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateStuffDto {
  @ApiProperty({ example: 'John', description: 'stuff name' })
  @IsOptional()
  @IsString()
  first_name: string;
  @ApiProperty({ example: 'Doe', description: 'stuff last name' })
  @IsOptional()
  @IsString()
  last_name: string;
  @ApiProperty({
    example: '+99890 009 09 09',
    description: 'stuff phone number',
  })
  @IsOptional()
  @IsString()
  phone_number: string;
  @ApiProperty({ example: 'John001', description: 'stuff username' })
  @IsOptional()
  @IsString()
  username: string;
  @ApiProperty({ example: '001nhoJ', description: 'stuff password' })
  @IsOptional()
  @IsString()
  password: string;
  @ApiProperty({ example: true, description: 'stuff status' })
  @IsOptional()
  @IsBoolean()
  is_active: boolean;
  @ApiProperty({ example: 'link', description: 'stuff image link' })
  @IsOptional()
  @IsString()
  image: string;
}
