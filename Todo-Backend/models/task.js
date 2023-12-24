const Joi = require('joi');
const mongoose = require('mongoose');

const Task = mongoose.model('Movies', new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
  completed: { 
    type: Boolean,
    default:false,  
    required: true
  }
}));

function validateTask(task) {
  const schema = {
    title: Joi.string().min(5).max(50).required(),
    completed: Joi.boolean().required(),
  };

  return Joi.validate(movie, schema);
}

exports.Task = Task; 
exports.validate = validateTask;