import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBranchDto {
  @ApiProperty({ example: 'London', description: 'branch name' })
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty({ example: 'London', description: 'branch address' })
  @IsNotEmpty()
  @IsString()
  address: string;
  @ApiProperty({
    example: '+99890 000 00 01',
    description: 'branch call number',
  })
  @IsNotEmpty()
  @IsString()
  call_number: string;
  @ApiProperty({ example: ' 41.111 , 69.999', description: 'branch location' })
  @IsNotEmpty()
  @IsString()
  location: string;
  @ApiProperty({ example: false, description: 'branch status' })
  @IsOptional()
  @IsBoolean()
  is_main: boolean;
}
