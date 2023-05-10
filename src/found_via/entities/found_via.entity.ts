import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface FoundViaAttrs {
  name: string;
}

@Table({ tableName: 'foundvia', freezeTableName: true })
export class FoundVia extends Model<FoundVia, FoundViaAttrs> {
  @ApiProperty({ example: 1, description: 'unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: 'facebook', description: 'social name' })
  @Column({ type: DataType.STRING })
  name: string;
}
