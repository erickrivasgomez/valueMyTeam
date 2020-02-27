import {Table, Column, Model, PrimaryKey, DataType} from 'sequelize-typescript';

@Table
export class Location extends Model<Location> {

  @PrimaryKey
  @Column(DataType.NUMBER)
  id: number

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.TEXT)
  description: Text;
 
}