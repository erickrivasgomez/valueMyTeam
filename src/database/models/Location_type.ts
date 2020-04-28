import { Table, Column, Model, PrimaryKey, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt, HasMany } from 'sequelize-typescript';
import { Location } from './Location';
import { Resource_location_type } from './Resource_location_type';

@Table
export class Location_type extends Model<Location_type> {

  @PrimaryKey
  @Column(DataType.NUMBER)
  id: number

  @Column(DataType.STRING)
  name: string;

  @ForeignKey(() => Location)
  @Column
  locationId: number;
  @BelongsTo(() => Location)
  location: Location;
  @HasMany(() => Resource_location_type)
  resource_location_types: Resource_location_type[];

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt: Date


}
