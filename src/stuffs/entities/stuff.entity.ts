import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Group } from '../../groups/entities/group.entity';
import { StuffRole } from '../../stuff_roles/entities/stuff_role.entity';

interface StuffAttrs {
  first_name: string;
  last_name: string;
  phone_number: string;
  username: string;
  password: string;
  is_active: boolean;
  image: string;
}

@Table({ tableName: 'stuffs', freezeTableName: true })
export class Stuff extends Model<Stuff, StuffAttrs> {
  @ApiProperty({ example: 1, description: 'unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'John', description: 'stuff name' })
  @Column({ type: DataType.STRING })
  first_name: string;
  @ApiProperty({ example: 'Doe', description: 'stuff last name' })
  @Column({ type: DataType.STRING })
  last_name: string;
  @ApiProperty({
    example: '+99890 009 09 09',
    description: 'stuff phone number',
  })
  @Column({ type: DataType.STRING })
  phone_number: string;
  @ApiProperty({ example: 'John001', description: 'stuff username' })
  @Column({ type: DataType.STRING })
  username: string;
  @ApiProperty({ example: '001nhoJ', description: 'stuff password' })
  @Column({ type: DataType.STRING })
  password: string;
  @ApiProperty({ example: true, description: 'stuff status' })
  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  is_active: boolean;
  @ApiProperty({ example: 'link', description: 'stuff image link' })
  @Column({ type: DataType.STRING })
  image: string;

  @HasMany(() => Group)
  group: Group[];

  @HasMany(() => StuffRole)
  stuffRoles: StuffRole[];
}
