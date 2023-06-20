const {response} = require('express');

const Pedido = require('../models/pedidoModel.js');

const pedidoGet = async (req, res = response) => {
    const pedido = await Pedido.find();
    res.json({
        pedido
    });
};

const pedidoGetOne = async (req, res = response) => {
    const { _id } = req.query;
    const pedido = await Pedido.findById(_id);
    res.json({ pedido });
};

const pedidoPost = async (req, res = response) => {
    const body = req.body;
    try {
        const ultimoPedido = await Pedido.findOne({}, {}, { sort: { numeroPedido: -1 } });
        let ultimoNumeroPedido = 1; 
        if (ultimoPedido) {
            ultimoNumeroPedido = ultimoPedido.numeroPedido;
        }
        const pedido = new Pedido({
            ...body,
            numeroPedido: ultimoNumeroPedido + 1
        });
        await pedido.save();
        return res.json({
            respuesta: 'Se ha registrado el Pedido con éxito.',
            pedido
        });
    } catch (error) {
        console.error(error);
        return res.json({ respuesta: 'Error en el servidor al registrar el Pedido.' });
    }
};

const pedidoPut = async (req, res = response) => {
    const { _id } = req.query;
    try {
        const pedidoActualizado = await Pedido.findOneAndUpdate(
            { _id: _id },
            {
                ...req.body
            },
            { new: true }
        );
        if (!pedidoActualizado) {
            return res.status(404).json({ respuesta: 'El Pedido no ha sido encontrado.' });
        }
        return res.json({
            respuesta: 'Actualización de Pedido realizada con éxito.',
            pedidoActualizado
        });
    } catch (error) {
        return res.json({ respuesta: 'Error en el servidor al actualizar el Pedido.' });
    }
};

const pedidoDelete = async (req, res = response) => {
    try {
        const pedidoEliminado = await Pedido.findOneAndDelete({ _id: req.body._id });
        if (!pedidoEliminado) {
            return res.status(404).json({ respuesta: 'Pedido no encontrado.' });
        };
        return res.json({
            respuesta: 'Pedido anulado exitosamente.',
            pedidoEliminado
        });
    } catch (error) {
        return res.status(500).json({ respuesta: 'Error en el servidor al anular el Pedido.' });
    };
};

module.exports = { pedidoGet, pedidoGetOne, pedidoPost, pedidoPut, pedidoDelete }; 
