const express = require('express');
const app = express();
let port = process.env.PORT; // Verwenden Sie 'let' für die port-Variable, um sie neu zuweisen zu können
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