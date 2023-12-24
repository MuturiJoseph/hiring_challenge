// const mongoose = require('mongoose');
// const config = require('config');

// module.exports = function() {
//   const db = config.get('db');
//   mongoose.connect(db)
//     .then(() => console.log(`Connected to ${db}...`))
//     .catch(error => console.log("coud not connet",error));
// }

const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
  const db = config.get('db');

  mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
    .then(() => console.log(`Connected to ${db}...`))
    .catch(error => console.error("Could not connect to the database:", error));
}

