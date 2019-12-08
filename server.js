const fastify = require('fastify')({ logger: true });

fastify.get('/healtcheck', async(req, resp) => {
    return {
        status: 'ok'
    };
});