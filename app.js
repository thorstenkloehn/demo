const express = require('express');
const app = express();
let port;

  port = process.env.PORT;


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});