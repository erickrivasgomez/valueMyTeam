import {Table, Column, Model, PrimaryKey, DataType} from 'sequelize-typescript';

@Table
export class Parameter extends Model<Parameter> {

  @PrimaryKey
  @Column(DataType.NUMBER)
  id: number

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.NUMBER)
  value: number;
 
}