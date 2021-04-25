const express = require('express');

const db = require('./config/db');
const scheme = require('./config/scheme/todo_scheme');
const todos = db.get('todos');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const items = await todos.find({});
    if (items) {
      res.json(items);
    }
    res.json({
      message: 'Todos are empty',
    });
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const valid = await scheme.validateAsync(req.body);
    if (valid) {
      const item = await todos.findOne(req.body);
      console.log(item);
      if (!item) {
        const inserted = await todos.insert(valid);
        res.json(inserted);
      } else {
        res.json({
          error: 'Todo already added!',
        });
      }
    }
  } catch (err) {
    next(err);
  }
});

router.delete('/', async (req, res, next) => {
  try {
    const todo = await todos.findOne(req.body);
    if (!todo) {
      res.json({
        message: 'Nothing to remove!',
      });
    }
    await todos.remove({
      _id: todo._id,
    });
    res.json({
      message: 'Succes remove!',
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
