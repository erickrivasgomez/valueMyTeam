import { Sequelize } from 'sequelize';

const sequelize = () => {
    return new Sequelize('valueMyTeam', 'vMTclient', 'VmtCLIENT2020-@', {
        host: 'localhost',
        dialect: 'mssql',
        port: 54321,
        dialectOptions: {
            instanceName: "SQLEXPRESS"
        }
    }).authenticate();
}

export { sequelize }