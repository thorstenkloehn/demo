const express = require('express'); // Import express
const app = express(); // Create an express app
const  port = process.env.PORT;
const Post = require('./Post');

// Beispiel für die Verwendung der Klasse
const newPost = new Post(1, "Ahrensburg", "Ahrensburg ist eine Stadt im Bundesland Schleswig-Holstein. Sie liegt nordöstlich von Hamburg und gehört zur Metropolregion Hamburg. Ahrensburg ist die größte Stadt des Kreises Stormarn und hat etwa 32.000 Einwohner. Die Stadt ist bekannt für ihr Schloss, das im 16. Jahrhundert erbaut wurde. Ahrensburg hat eine gute Verkehrsanbindung an Hamburg und Lübeck. Die Stadt ist ein beliebtes Ausflugsziel für Touristen, die die schöne Landschaft und die historischen Gebäude der Stadt erkunden möchten.", "2021-09-01");

app.get('/', (req, res) => {

  res.json(newPost);
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});