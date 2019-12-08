const fastify = require('fastify')({ logger: true });

fastify.get('/healthcheck', async(req, resp) => {
    return {
        status: 'ok'
    };
});

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