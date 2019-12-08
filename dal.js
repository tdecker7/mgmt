const { Client } = require('pg');

const client = new Client({
    user: "mgmt_user",
    password: 'acd955eb-3da5-46a4-9d4e-e987b512ab1b',
    host: "127.0.0.1",
    database: "mgmt",
    port: 5432
});
client.connect(err => {
    if (err) {
        console.log('PG CONNECTION ERROR: ', err.stack);
        process.exit(1);
    }
    console.log('PG CONNECTED SUCCESSFULLY');
});

const getHomes = (request, response) => {
    client.query("SELECT * FROM mgmt.homes", (error, results) => {
        if (error) throw error;
        response.status(200).send(results.rows);
    })
}

module.exports = { getHomes };