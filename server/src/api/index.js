const express = require('express');
const todos = require('./todo');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});


router.get('/', async (req, res,next) => {
  if () {
    
  }
});


router.use('/todo', todos);

module.exports = router;
