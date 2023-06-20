const { Schema, model } = require('mongoose');

const PedidoSchema = Schema({
    numeroPedido: {
        type: Number,
        required: [true, 'El campo "Numero pedido" es obligatorio'],
        unique: true,
        autoIncrement: true,
    },
    cliente: {
        type: String,
        required: [true, 'El campo "Cliente" es obligatorio']
    },
    empleado: {
        type: String,
        required: [true, 'El campo "Empleado" es obligatorio']
    },
    fechaPedido: {
        type: Date,
        required: [true, 'El campo "FechaPedido" es obligatorio']
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
    totalPedido: {
        type: Number,
        required: [true, 'El campo "Total venta" es obligatorio'],
    },
    estadoPedido: {
        type: String,
        required: [true, 'El campo campo "Estado pedido" es obligatorio'],
        default: 'Por entregar'
    }
});

module.exports = model('Pedido', PedidoSchema);