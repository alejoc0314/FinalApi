const { Schema, model } = require('mongoose');

const RolesSchema = Schema({
  nombreRol: {
    type: String,
    required: [true, 'El campo "Nombre" es requerido'],
  },
  descripcionRol: {
    type: String,
    required: [true, 'El campo "Descripcion" es requerido'],
  },
  modulosRol: {
    type: [String],
    required: [true, 'El campo "Modulos" es requerido'],
  },
  estadoRol: {
    type: String,
    required: [true, 'El campo "estado" es requerido'],
    default: 'Activo',
  },
});

module.exports = model('roles', RolesSchema);