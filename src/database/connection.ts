
import { Sequelize } from 'sequelize-typescript';
import { Answer } from './models/Answer';
import { Question } from './models/Question';
 
const sequelize =  new Sequelize({
        database: 'vmaDB',
        dialect: 'mssql',
        username: 'vmaDEV',
        port: 54321,
        password: '_Development01@',
        models: [Answer, Question], 
});
export { sequelize }