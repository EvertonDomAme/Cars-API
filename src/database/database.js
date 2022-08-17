const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose.connect('mongodb://localhost:27017/vehicles_db', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() =>{
    console.log('Connected to Mongo DB')
  }).catch((err) => {
    return console.log(`Database connection error: ${err}`);
  });
}

module.exports = connectToDatabase;