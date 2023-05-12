import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Lead } from '../../leads/entities/lead.entity';
import { Group } from '../../groups/entities/group.entity';

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

  @HasMany(() => Lead)
  leads: Lead[];

  @HasMany(() => Group)
  groups: Group[];
}
