
import { Sequelize } from 'sequelize-typescript';
import { Resource } from './models/Resource';
 
const sequelize =  new Sequelize({
        database: 'vmtDB',
        dialect: 'mssql',
        username: 'vmtDEV',
        port: 54321,
        password: '_Development01@',
        models: [Resource], 
});
export { sequelize }