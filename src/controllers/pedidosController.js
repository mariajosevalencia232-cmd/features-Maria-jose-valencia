const pedidos = require('../models/pedidos');

const getPedidos = (req, res) => {
  let lista = pedidos;
  if (req.query.estado) {
    lista = lista.filter(p => p.estado === req.query.estado);
  }
  res.json(lista);
};

const getPedidoById = (req, res) => {
  const pedido = pedidos.find(p => p.id === req.params.id);
  if (!pedido) return res.status(404).json({ mensaje: "Pedido no encontrado" });
  res.json(pedido);
};

const createPedido = (req, res) => {
  const { cliente, productos, total } = req.body;
  if (!cliente || !productos || !total) {
    return res.status(400).json({ mensaje: "Faltan campos requeridos: cliente, productos, total" });
  }
  const nuevo = {
    id: "ped-" + String(pedidos.length + 1).padStart(3, '0'),
    cliente,
    productos,
    total,
    estado: "PENDIENTE",
    fecha: new Date().toISOString()
  };
  pedidos.push(nuevo);
  res.status(201).json(nuevo);
};

const updatePedido = (req, res) => {
  const pedido = pedidos.find(p => p.id === req.params.id);
  if (!pedido) return res.status(404).json({ mensaje: "Pedido no encontrado" });
  const { cliente, productos, total, estado } = req.body;
  if (cliente) pedido.cliente = cliente;
  if (productos) pedido.productos = productos;
  if (total) pedido.total = total;
  if (estado) pedido.estado = estado;
  res.json(pedido);
};

const deletePedido = (req, res) => {
  const index = pedidos.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ mensaje: "Pedido no encontrado" });
  pedidos.splice(index, 1);
  res.status(204).send();
};

module.exports = { getPedidos, getPedidoById, createPedido, updatePedido, deletePedido };