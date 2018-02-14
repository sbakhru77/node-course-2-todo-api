var mongoose = require('mongoose');

var User = mongoose.model('Users', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

// var user = new User({
//   email: 'sbakhru@walmartlabs.com'
// });

module.exports = {User};
