'use strict';
import {Table, Column, Model, PrimaryKey, DataType} from 'sequelize-typescript';

@Table
export class Resource extends Model<Resource> {

  @PrimaryKey
  @Column(DataType.NUMBER)
  id: number

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.TEXT)
  description: Text;
 
}



