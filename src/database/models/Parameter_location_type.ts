import { Table, Column, Model, PrimaryKey, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Parameter } from './Parameter';
import { Location_type } from './Location_type';

@Table
export class Parameter_location_type extends Model<Parameter_location_type> {

    @PrimaryKey
    @Column(DataType.NUMBER)
    id: number

    @ForeignKey(() => Parameter)
    @Column
    parameterId: number;
    @BelongsTo(() => Parameter)
    parameter: Parameter;

    @ForeignKey(() => Location_type)
    @Column
    location_typeId: number;
    @BelongsTo(() => Location_type)
    location_type: Location_type;

    @CreatedAt
    @Column(DataType.DATE)
    createdAt: Date

    @UpdatedAt
    @Column(DataType.DATE)
    updatedAt: Date

}