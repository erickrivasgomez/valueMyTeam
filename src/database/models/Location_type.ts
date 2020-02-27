import { Table, Column, Model, PrimaryKey, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt} from 'sequelize-typescript';
import { Location } from './Location';

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

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt: Date


}
