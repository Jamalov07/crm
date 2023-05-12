import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Lead } from '../../leads/entities/lead.entity';

interface ReasonAttrs {
  full_text: string;
}

@Table({ tableName: 'reasons', freezeTableName: true })
export class Reason extends Model<Reason, ReasonAttrs> {
  @ApiProperty({ example: 1, description: 'unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'about', description: 'reason full text' })
  @Column({ type: DataType.STRING })
  full_text: string;

  @HasMany(() => Lead)
  leads: Lead[];
}
