import {Table, Column, Model, PrimaryKey, DataType, ForeignKey} from 'sequelize-typescript';
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

  @ForeignKey(() => Location_type)
  @Column
  location_typeId: number;
 
 
}