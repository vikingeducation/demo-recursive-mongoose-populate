const mongoose = require('mongoose');
const bluebird = require('bluebird');
const models = require('./model');

mongoose.Promise = bluebird;

require('./db')()
  .then(() => console.log('Cleaning database...'))
  .then(() => {
    return require('./clean')();
  })
  .then(() => console.log('Seeding...'))
  .then(() => {
    return require('./seeds')();
  })
  .then(() => console.log('Done.'))
  .catch(e => console.error(e))
  .then(() => mongoose.disconnect());
