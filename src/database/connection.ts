
import { Sequelize } from 'sequelize-typescript';
import { Resource } from './models/Resource';
import { Location_type } from './models/Location_type';
import { Location } from './models/Location';
import { Parameter } from './models/Parameter';
import { Parameter_location } from './models/Parameter_location';
import { Parameter_location_type } from './models/Parameter_location_type';
import { Resource_location_type } from './models/Resource_location_type';
 
const sequelize =  new Sequelize({
        database: 'vmtDB',
        dialect: 'mssql',
        username: 'vmtDEV',
        port: 54321,
        password: '_Development01@',
        models: [Resource, Location, Location_type, Parameter, Parameter_location, Parameter_location_type, Resource_location_type], 
});
export { sequelize }