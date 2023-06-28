const express = require('express');
const app = express();
const path = require('path');

// Set up the public directory to serve static assets
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
})

// Define the route for the individual Pokemon pages
app.get('/pokemon/:id', (req, res) => {
  const pokemonId = req.params.id;
  const pokemon = data.find(p => p.Nr === pokemonId);
  res.render('pokemon', { pokemon });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
