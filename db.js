const mongoose = require('mongoose');

module.exports = () => {
  const localUrl = `mongodb://127.0.0.1:27017/test-mongoose`;
  return mongoose.connect(localUrl);
};
