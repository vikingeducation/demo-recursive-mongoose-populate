const mongoose = require('mongoose');
const bluebird = require('bluebird');
const User = require('./model');

mongoose.Promise = bluebird;

constructPopulateConfigObj = (level, path) => {
  const oneLevel = () => ({ path });
  let obj = oneLevel();

  while (level) {
    if (level !== 1) {
      obj.populate = Object.assign({}, obj);
    }
    obj = Object.assign({}, obj);
    --level;
  }

  return obj;
};

require('./db')().then(() => {
  console.log('Connected!');

  User.find({ name: 'User5' }, { _id: 0, level: 1 })
    .then(resp => {
      const { level } = resp[0];

      return User.find({ name: 'User5' }).populate(
        constructPopulateConfigObj(level, 'friends')
      );
    })
    .then(resp => console.log(JSON.stringify(resp)));
});
