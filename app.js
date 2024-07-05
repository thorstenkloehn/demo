const express = require('express');
const app = express();
let port = process.env.PORT; // Verwenden Sie 'let' für die port-Variable, um sie neu zuweisen zu können
if (!port) {
  port = 3000; // Setzen Sie port auf 3000, wenn process.env.PORT undefiniert ist
}
else {
  port = process.env.PORT;
}

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});