import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface StatusAttrs {
  name: string;
  description: string;
}

@Table({ tableName: 'status', freezeTableName: true })
export class Status extends Model<Status, StatusAttrs> {
  @ApiProperty({ example: 1, description: 'unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Status 1', description: 'Status name' })
  @Column({ type: DataType.STRING })
  name: string;
  @ApiProperty({ example: 'about Status', description: 'about Status' })
  @Column({ type: DataType.STRING })
  description: string;
}
