const express = require('express');
const body = require('body-parser');
const ResultPostController = require('../controllers/ResultPostController');
const ResultGetController = require('../controllers/ResultGetController');

try {
  const server = express();

  server.use(body.json());
  server.post('/api/result', ResultPostController);
  server.get('/api/result', ResultGetController);

  module.exports = server;
} catch (err) {
  console.error('API error: ', err);
}
