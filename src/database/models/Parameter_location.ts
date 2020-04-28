import { Table, Column, Model, PrimaryKey, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Location } from './Location';
import { Parameter } from './Parameter';

@Table
export class Parameter_location extends Model<Parameter_location> {

  @PrimaryKey
  @Column(DataType.NUMBER)
  id: number

  @ForeignKey(() => Location)
  @Column
  locationId: number;
  @BelongsTo(() => Location)
  location: Location;

  @ForeignKey(() => Parameter)
  @Column
  parameterId: number;
  @BelongsTo(() => Parameter)
  parameter: Parameter;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt: Date

}