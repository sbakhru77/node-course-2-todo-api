var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};

// var newTodo = new Todo({
//   text: 'Stretch & Breathe',
//   completed: true,
//   completedAt: 123
// });
//
// newTodo.save().then((doc) => {
//   console.log('Todo saved', doc)
// }, (e) => {
//   console.log('Unable to save todo',e);
// });
