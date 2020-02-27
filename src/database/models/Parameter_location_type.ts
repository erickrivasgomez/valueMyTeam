import { Table, Column, Model, PrimaryKey, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Parameter } from './Parameter';
import { Location_type } from './Location_type';

@Table
export class Parameter_location extends Model<Parameter_location> {

    @PrimaryKey
    @Column(DataType.NUMBER)
    id: number

    @ForeignKey(() => Parameter)
    @Column(DataType.INTEGER)
    parameterId: number;

    @ForeignKey(() => Location_type)
    @Column(DataType.INTEGER)
    location_typeId: number;

    // @BelongsTo(() => Parameter)
    // parameter: Parameter;

    // @BelongsTo(() => Location_type)
    // location_type: Location_type;

}