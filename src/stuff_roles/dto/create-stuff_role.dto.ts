import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateStuffRoleDto {
  @ApiProperty({ example: 1, description: 'stuff id' })
  @IsNotEmpty()
  @IsNumber()
  stuff_id: number;
  @ApiProperty({ example: 1, description: 'role id' })
  @IsNotEmpty()
  @IsNumber()
  role_id: number;
}
