import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber } from 'class-validator';

export class UpdateStuffRoleDto {
  @ApiProperty({ example: 1, description: 'stuff id' })
  @IsOptional()
  @IsNumber()
  stuff_id: number;
  @ApiProperty({ example: 1, description: 'role id' })
  @IsOptional()
  @IsNumber()
  role_id: number;
}
