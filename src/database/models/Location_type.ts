import {Table, Column, Model, PrimaryKey, DataType, ForeignKey} from 'sequelize-typescript';
import { Location } from './Location';

@Table
export class Location_type extends Model<Location_type> {

  @PrimaryKey
  @Column(DataType.NUMBER)
  id: number

  @Column(DataType.STRING)
  name: string;

  @ForeignKey(() => Location)
  @Column(DataType.INTEGER)
  locationId: number;
 
 
}
