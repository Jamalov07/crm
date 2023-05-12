import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Group } from '../../groups/entities/group.entity';

interface BranchAttrs {
  name: string;
  address: string;
  call_number: string;
  location: string;
  is_main: boolean;
}

@Table({ tableName: 'branches', freezeTableName: true })
export class Branch extends Model<Branch, BranchAttrs> {
  @ApiProperty({ example: 1, description: 'unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: 'London', description: 'branch name' })
  @Column({ type: DataType.STRING })
  name: string;
  @ApiProperty({ example: 'London', description: 'branch address' })
  @Column({ type: DataType.STRING })
  address: string;
  @ApiProperty({
    example: '+99890 000 00 01',
    description: 'branch call number',
  })
  @Column({ type: DataType.STRING })
  call_number: string;
  @ApiProperty({ example: ' 41.111 , 69.999', description: 'branch location' })
  @Column({ type: DataType.STRING })
  location: string;
  @ApiProperty({ example: false, description: 'branch status' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  is_main: boolean;

  @HasMany(() => Group)
  groups: Group[];
}
