const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Reaction Schema as a subdocument
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => createdAtVal.toISOString(),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Define the Thought Schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => createdAtVal.toISOString(),
    },
    username: { // Assuming you have a User model and users have usernames
      type: String,
      required: true,
    },
    // Use reactionSchema to define an array of reactions
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Virtual to get the number of reactions
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Define the Thought model
const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
