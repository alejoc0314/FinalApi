const { response } = require('express');

const Rol = require('../models/rolModel.js');

const rolGet = async (req, res = response) => {
    const rol = await Rol.find();
    res.json({
        rol
    });
};

const rolGetOne = async (req, res = response) => {
    const { _id } = req.query;
    const rol = await Rol.findById(_id);
    res.json({ rol });
};

const rolPost = async (req, res = response) => {
    const body = req.body;
    try {
        const rol = new Rol(body);
        await rol.save();
        return res.json({
            respuesta: 'Se ha registrado el rol con éxito.',
            rol
        });
    } catch (error) {
        console.error(error);
        return res.json({ respuesta: 'Error en el servidor al registrar el Rol.' });
    }
};

const rolPut = async (req, res = response) => {
    const { _id } = req.params;
    try {
        const rolActualizado = await Rol.findOneAndUpdate(
            { _id: _id },
            { ...req.body },
            { new: true }
        );
        console.log(rolActualizado);
        if (!rolActualizado) {
            return res.status(404).json({ respuesta: 'El Rol no ha sido encontrado.' });
        }
        return res.json({
            respuesta: 'Actualización del Rol realizada con éxito.',
            rolActualizado
        });
    } catch (error) {
        console.error('Error en el servidor al actualizar el Rol:', error);
        return res.status(500).json({ respuesta: 'Error en el servidor al actualizar el Rol.' });
    }
};

const rolDelete = async (req, res = response) => {
    try {
        const rolEliminado = await Rol.findOneAndDelete({ _id: req.body._id });
        if (!rolEliminado) {
            return res.status(404).json({ respuesta: 'Rol no encontrado.' });
        };
        return res.json({
            respuesta: 'Rol eliminado exitosamente.',
            rolEliminado
        });
    } catch (error) {
        return res.status(500).json({ respuesta: 'Error en el servidor al eliminar el Rol.' });
    };
};

module.exports = { rolGet, rolGetOne, rolPost, rolPut, rolDelete }; 