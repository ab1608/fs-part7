const pingRouter = require('express').Router();

pingRouter.get('/', async (req, res) => {
  return res.json({ message: 'pong', time: new Date().toISOString() });
});

module.exports = pingRouter;
