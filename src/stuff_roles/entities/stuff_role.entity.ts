import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface StuffRoleAttrs {
  stuff_id: number;
  role_id: number;
}

@Table({ tableName: 'stuffroles', freezeTableName: true })
export class StuffRole extends Model<StuffRole, StuffRoleAttrs> {
  @ApiProperty({ example: 1, description: 'unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: 'stuff id' })
  @Column({ type: DataType.INTEGER })
  stuff_id: number;
  @ApiProperty({ example: 1, description: 'role id' })
  @Column({ type: DataType.INTEGER })
  role_id: number;
}
