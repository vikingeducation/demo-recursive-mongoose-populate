const mongoose = require('mongoose');

module.exports = () => {
  const collections = mongoose.connection.collections;
  const collectionKeys = Object.keys(collections);
  const promises = [];
  collectionKeys.forEach(key => {
    const promise = collections[key].remove();
    promises.push(promise);
  });
  return Promise.all(promises);
};
