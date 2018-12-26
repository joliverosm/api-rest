const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/user';

mongoose.connect(URI, {
        useNewUrlParser: true
    })
    .then(db => console.log('DB is connected'))
    .catch(err => console.log('err'));

module.exports = mongoose;