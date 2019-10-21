var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Item = new Schema({
  name:  {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  introduction: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  hobbies: {
    type: Array,
    required: true
  },
},{
	collection: 'users'
});

module.exports = mongoose.model('User', Item);
