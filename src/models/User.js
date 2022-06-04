const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
    minlength: [3, '{VALUE} must be at least 3 characters long.'],
    maxlength: [20, '{VALUE} must be below or equal 20 characters.'],
  },
  email: { required: true, type: String },
  posts: [{ required: true, type: mongoose.Types.ObjectId, ref: 'Post' }]
});

userSchema.path('posts').validate(function (postArr) {
  return postArr.length < 5;
}, 'User posts cannot exceed 5.');

const User = mongoose.model('User', userSchema);
module.exports = User;
