const express = require('express');
const app = express();

const authorRoutes = require('./routes/authorRoutes');
const bookRoutes = require('./routes/bookRoutes');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Simple Library API is running');
});

app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});