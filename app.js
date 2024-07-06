const express = require('express');
const app = express();
let port;
if (process.env.start==1) {
  port = process.env.PORT;
}
else {
  port = 3000;
}

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});