const {Schema, model} = require('mongoose')

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('Todo', schema)