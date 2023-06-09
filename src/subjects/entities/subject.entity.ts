import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Group } from '../../groups/entities/group.entity';

interface SubjectAttrs {
  name: string;
}

@Table({ tableName: 'subjects', freezeTableName: true })
export class Subject extends Model<Subject, SubjectAttrs> {
  @ApiProperty({ example: 1, description: 'unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'english', description: 'subject name' })
  @Column({ type: DataType.STRING })
  name: string;

  @HasMany(()=>Group)
  groups:Group[]
}
