const { Client } = require('pg');

const client = new Client({
    user: "postgres",
    host: "db",
    database: "mgmt",
    port: 5432
});
client.connect();