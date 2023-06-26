import { createPool } from "mysql2";
import { Kysely, MysqlDialect } from "kysely";

const dialect = new MysqlDialect({
    pool: createPool({
        database: "lovefy",
        host: "aws.connect.psdb.cloud",
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
    })
})