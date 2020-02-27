import { Table, Column, Model, PrimaryKey, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Resource } from './Resource';
import { Location_type } from './Location_type';

@Table
export class Resource_location_type extends Model<Resource_location_type> {

  @PrimaryKey
  @Column(DataType.NUMBER)
  id: number

  @Column(DataType.DOUBLE)
  price: number;

  @ForeignKey(() => Resource)
  @Column
  resourceId: number;
  @BelongsTo(() => Resource)
  resource: Resource;

  @ForeignKey(() => Location_type)
  @Column
  location_typeId: number;
  @BelongsTo(() => Location_type)
  location_type: Location_type;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt: Date

}