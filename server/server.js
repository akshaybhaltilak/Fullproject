const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/home', async (req, res) => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'data', 'home.json'), 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Error reading home data' });
  }
});

app.get('/api/news', async (req, res) => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'data', 'news.json'), 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Error reading news data' });
  }
});

app.get('/api/code', async (req, res) => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'data', 'code.json'), 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Error reading code data' });
  }
});

app.get('/api/community', async (req, res) => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'data', 'community.json'), 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Error reading community data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});