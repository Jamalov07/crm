import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface StageAttrs {
  name: string;
  description: string;
}

@Table({ tableName: 'stages', freezeTableName: true })
export class Stage extends Model<Stage, StageAttrs> {
  @ApiProperty({ example: 1, description: 'unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'stage 1', description: 'stage name' })
  @Column({ type: DataType.STRING })
  name: string;
  @ApiProperty({ example: 'about stage', description: 'about stage' })
  @Column({ type: DataType.STRING })
  description: string;
}
