import { createPool } from "mysql2/promise";

export const db = createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: 3306,
    database: 'employeedb'
})