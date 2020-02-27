import {Table, Column, Model, PrimaryKey, DataType, ForeignKey} from 'sequelize-typescript';
import { Location } from './Location';
import { Parameter } from './Parameter';

@Table
export class Parameter_location extends Model<Parameter_location> {

  @PrimaryKey
  @Column(DataType.NUMBER)
  id: number

  @ForeignKey(() => Location)
  @Column(DataType.INTEGER)
  locationId: number;

  @ForeignKey(() => Parameter)
  @Column(DataType.INTEGER)
  parameterId: number;
 
}