const express = require('express');
const app = express();
let port; // Deklaration außerhalb des if-else-Blocks
if (process.env.NODE_ENV !== 'production') {
  port = 3000; // Standardwert hinzufügen, falls PORT nicht gesetzt ist
} else {
  port = process.env.PORT;
}

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});