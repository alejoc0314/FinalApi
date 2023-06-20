const { Schema, model } = require('mongoose');

const ContadorSchema = Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  valor: {
    type: Number,
    default: 0,
  },
});

module.exports = model('Contador', ContadorSchema);