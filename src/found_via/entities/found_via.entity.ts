import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Lead } from '../../leads/entities/lead.entity';

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

  @HasMany(() => Lead)
  leads: Lead[];
}
