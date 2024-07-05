const express = require('express');
const app = express();
const http = require('http');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = http.createServer(app);

server.listen(0, '0.0.0.0', () => {
  const address = server.address();
  console.log(`Server läuft auf Port ${address.port}`);
});