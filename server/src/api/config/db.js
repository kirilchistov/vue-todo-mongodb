const monk = require('monk');

const db = monk('localhost:27017/todo');

module.exports = db;
