const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.route('db.json');
const middlewares = jsonServer.default();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
