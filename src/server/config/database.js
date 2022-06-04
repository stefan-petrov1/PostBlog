const mongoose = require('mongoose');

exports.initializeDb = async (dbUri) => {
  const db = await mongoose.connect(dbUri);
  console.log('Successfully connected to database!');

  return db;
};
