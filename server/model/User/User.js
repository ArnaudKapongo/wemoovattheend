const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
      email: {
          type: String,
          required: true
      },
      password: {
          type: String
      }
});

const User = mongoose.model('User', UserSchema);