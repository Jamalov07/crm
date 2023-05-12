import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Stuff } from '../../stuffs/entities/stuff.entity';
import { Role } from '../../roles/entities/role.entity';

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
  @ForeignKey(() => Stuff)
  @Column({ type: DataType.INTEGER })
  stuff_id: number;
  @BelongsTo(() => Stuff)
  stuff: Stuff;
  @ApiProperty({ example: 1, description: 'role id' })
  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  role_id: number;
  @BelongsTo(() => Role)
  role: Role;
}
