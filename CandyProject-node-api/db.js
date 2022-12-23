const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
/*    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,*/
/*    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,*/
    'candy_db',
    'user',
    'password',
    {
        dialect: 'postgres',
        host: 'postgres_db',//process.env.DB_HOST, //
        //port: process.env.DB_PORT,
        define:
            {
                "freezeTableName": true
            }
    }
)