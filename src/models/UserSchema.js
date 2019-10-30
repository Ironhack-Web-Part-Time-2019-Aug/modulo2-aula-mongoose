const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserDefinitions = {
  name: String,
  age: {
    type: Number,
    required: true,
  },
  registerDate: {
    type: Date,
    default: Date.now,
  }
};

const UserSchema = new Schema(UserDefinitions);
const UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;
