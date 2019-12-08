const fastify = require('fastify')({ logger: true });
const db = require('./dal.js');

db.init();

console.log('db', db);

fastify.get('/healthcheck', async (req, resp) => {
    return {
        status: 'ok'
    };
});

fastify.get('/homes', db.getHomes);


const start = async () => {
    const PORT = process.env.PORT || 3000;
    try {
        await fastify.listen(PORT);
        fastify.log.info(`Server listening on ${PORT}`);
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}

start();