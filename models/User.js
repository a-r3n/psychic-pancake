const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User Schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // Using regex to validate email format
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    // Array of _id values referencing the Thought model (Thoughts posted by the user)
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    // Self-referencing array to represent the user's friends list
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true, // Ensure virtuals are included when converting a document to JSON
    },
    id: false,
  }
);

// Virtual called 'friendCount' to retrieve the number of friends
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
