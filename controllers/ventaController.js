const {response} = require('express');

const Venta = require('../models/ventaModel.js');

const ventaGet = async (req, res = response) => {
    const venta = await Venta.find();
    res.json({
        venta
    });
};

const ventaGetOne = async (req, res = response) => {
    const { _id } = req.query;
    const venta = await Venta.findById(_id);
    res.json({ venta });
};

const ventaPost = async (req, res = response) => {
    const body = req.body;
    try {
        const venta = new Venta({
            ...body
        });
        await venta.save();
        return res.json({
            respuesta: 'Se ha registrado la Venta con éxito.',
            venta
        });
    } catch (error) {
        console.error(error);
    }        return res.json({ respuesta: 'Error en el servidor al registrar la Venta.' });
};

const ventaPut = async (req, res = response) => {
    const { _id } = req.query;
    try {
        const ventaActualizada = await Venta.findOneAndUpdate(
            { _id: _id },
            {
                ...req.body
            },
            { new: true }
        );
        if (!ventaActualizada) {
            return res.status(404).json({ respuesta: 'La Venta no ha sido encontrada.' });
        }
        return res.json({
            respuesta: 'Actualización de Venta realizada con éxito.',
            ventaActualizada
        });
    } catch (error) {
        return res.json({ respuesta: 'Error en el servidor al actualizar la venta.' });
    }
};

const ventaDelete = async (req, res = response) => {
    const { _id } = req.query;
    try {
        const ventaEliminada = await Venta.findOneAndDelete({ _id: req.body._id });
        if (!ventaEliminada) {
            return res.status(404).json({ respuesta: 'Venta no encontrada.' });
        };
        return res.json({ 
            respuesta: 'Venta anulada exitosamente.', 
            ventaEliminada
        });
    } catch (error) {
        return res.status(500).json({ respuesta: 'Error en el servidor al anular la Venta.' });
    };
};

module.exports = { ventaGet, ventaGetOne,ventaPost, ventaPut, ventaDelete }; 