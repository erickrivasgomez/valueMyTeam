import { Table, Column, Model, PrimaryKey, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class Parameter extends Model<Parameter> {

  @PrimaryKey
  @Column(DataType.NUMBER)
  id: number

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.NUMBER)
  value: number;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt: Date


}