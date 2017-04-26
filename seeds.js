const mongoose = require('mongoose');
const User = require('./model');

function insertUser(i, user) {
  const newUser = new User({
    name: `User${i}`,
    level: i,
    friends: [user]
  });

  return newUser.save();
}

module.exports = () => {
  const users = [];
  let index = 0;

  const user = new User({
    name: `User${index}`,
    level: 0,
    friends: []
  });

  return user
    .save()
    .then(insertedUser => {
      ++index;
      return insertUser(index, insertedUser);
    })
    .then(insertedUser => {
      ++index;
      return insertUser(index, insertedUser);
    })
    .then(insertedUser => {
      ++index;
      return insertUser(index, insertedUser);
    })
    .then(insertedUser => {
      ++index;
      return insertUser(index, insertedUser);
    })
    .then(insertedUser => {
      ++index;
      return insertUser(index, insertedUser);
    })
    .then(insertedUser => {
      ++index;
      return insertUser(index, insertedUser);
    })
    .then(insertedUser => {
      ++index;
      return insertUser(index, insertedUser);
    })
    .then(insertedUser => {
      ++index;
      return insertUser(index, insertedUser);
    })
    .then(insertedUser => {
      ++index;
      return insertUser(index, insertedUser);
    });
};
