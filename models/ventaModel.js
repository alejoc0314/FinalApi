const { Schema, model } = require('mongoose');

const VentaSchema = Schema({
    numeroVenta: {
        type: Number,
        required: [true, 'El campo "Numero pedido" es obligatorio'],
    },
    cliente: {
        type: String,
        required: [true, 'El campo "Cliente" es obligatorio']
    },
    empleado: {
        type: String,
        required: [true, 'El campo "Empleado" es obligatorio']
    },
    fechaVenta: {
        type: Date,
        required: [true, 'El campo "FechaPedido" es obligatorio']
    },
    fechaEntrega: {
        type: Date,
        required: [true, 'El campo "Fecha Entrega" es obligatorio'],
    },
    tipoPago: {
        type: String,
        required: [true, 'El campo "Tipo de pago" es obligatorio'],
        enum: ['Contado', 'Crédito']
    },
    productos: [{
        _id: {
            type: String,
            required: [true, 'El campo "id Producto" es obligatorio'],
        },
        nombreProducto: {
            type: String,
            required: [true, 'El campo "Nombre producto" es obligatorio'],
        },
        cantidad: {
            type: Number,
            required: [true, 'El campo "Cantidad" es obligatorio'],
        },
        precioCompra: {
            type: Number,
            required: [true, 'El campo "Precio de Compra" es obligatorio'],
        },
        precioVenta: {
            type: Number,
            required: [true, 'El campo "Precio de Venta" es obligatorio'],
        },
        precioTotal: {
            type: Number,
            required: [true, 'El campo "Precio total" es obligatorio'],
        },
    }],
    totalVenta: {
        type: Number,
        required: [true, 'El campo "Total venta" es obligatorio'],
    },
    estadoVenta: {
        type: String,
        required: [true, 'El campo "Estado venta" es obligatorio'],
    }
});

module.exports = model('Venta', VentaSchema);