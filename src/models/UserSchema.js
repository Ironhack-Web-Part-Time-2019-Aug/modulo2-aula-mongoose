const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: String,
    age: {
      type: Number,
      required: true,
    },
    registerDate: {
      type: Date,
      default: Date.now,
    }
  }
);

const userModel = mongoose.model('Users', UserSchema);

module.exports = { userModel };
