/**
 * NOTE: This file is a reference implementation for "Task 2: Backend".
 * In this browser-based demo environment, the frontend uses services/api.ts to simulate this server.
 * To run this locally, you would need Node.js, Express, and CORS.
 */

/*
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Mock Data (Same as constants.ts)
const MEMBERS = [
  { id: '1', name: 'Alex Johnson', role: 'Lead', ... },
  // ... rest of data
];

// 1. GET /members
app.get('/members', (req, res) => {
  // Optional: Add filtering query params on backend
  const { role, location } = req.query;
  let results = MEMBERS;
  
  if (role && role !== 'All') {
    results = results.filter(m => m.role === role);
  }
  
  setTimeout(() => {
    res.json(results);
  }, 500); // Simulate delay
});

// 2. GET /members/:id
app.get('/members/:id', (req, res) => {
  const member = MEMBERS.find(m => m.id === req.params.id);
  
  setTimeout(() => {
    if (member) {
      res.json(member);
    } else {
      res.status(404).json({ message: 'Member not found' });
    }
  }, 300);
});

app.listen(PORT, () => {
  console.log(`GDGC Member API running on http://localhost:${PORT}`);
});
*/
