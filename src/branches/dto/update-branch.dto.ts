import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateBranchDto {
  @ApiProperty({ example: 'London', description: 'branch name' })
  @IsOptional()
  @IsString()
  name: string;
  @ApiProperty({ example: 'London', description: 'branch address' })
  @IsOptional()
  @IsString()
  address: string;
  @ApiProperty({
    example: '+99890 000 00 01',
    description: 'branch call number',
  })
  @IsOptional()
  @IsString()
  call_number: string;
  @ApiProperty({ example: ' 41.111 , 69.999', description: 'branch location' })
  @IsOptional()
  @IsString()
  location: string;
  @ApiProperty({ example: false, description: 'branch status' })
  @IsOptional()
  @IsBoolean()
  is_main: boolean;
}
