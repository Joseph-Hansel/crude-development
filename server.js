// server.js
const jsonServer = require('json-server');

const server = jsonServer.create();

// Connect db.json
const router = jsonServer.router('db.json');

// Default middlewares (logger, static, cors, etc.)
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Optional: Reload db.json on every request
server.use((req, res, next) => {
  router.db.read();
  next();
});

// Use router
server.use(router);

// Start server
server.listen(3000, () => {
  console.log('JSON Server is running on http://localhost:3000');
});