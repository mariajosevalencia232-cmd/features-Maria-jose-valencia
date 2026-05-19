const pedidos = [];

// GET pedidos
const getPedidos = (req, res) => {
  res.status(200).json(pedidos);
};

const getPedidoById = (req, res) => {

  const { id } = req.params;

  const pedido = pedidos.find(p => p.id === id);

  if (!pedido) {
    return res.status(404).json({
      mensaje: 'Pedido no encontrado'
    });
  }

  res.status(200).json(pedido);
};

const updatePedido = (req, res) => {

  const { id } = req.params;

  const { cliente, producto, cantidad, total } = req.body;

  const pedido = pedidos.find(p => p.id === id);

  if (!pedido) {
    return res.status(404).json({
      mensaje: 'Pedido no encontrado'
    });
  }

  // VALIDACIONES

  if (!cliente || !producto || !cantidad || !total) {
    return res.status(400).json({
      error: 'Todos los campos son obligatorios'
    });
  }

  if (cantidad <= 0) {
    return res.status(400).json({
      error: 'La cantidad debe ser mayor a 0'
    });
  }

  if (total <= 0) {
    return res.status(400).json({
      error: 'El total debe ser mayor a 0'
    });
  }

  pedido.cliente = cliente;
  pedido.producto = producto;
  pedido.cantidad = cantidad;
  pedido.total = total;

  res.status(200).json({
    mensaje: 'Pedido actualizado correctamente',
    pedido
  });

};

const deletePedido = (req, res) => {

  const { id } = req.params;

  const pedidoIndex = pedidos.findIndex(p => p.id === id);

  if (pedidoIndex === -1) {
    return res.status(404).json({
      mensaje: 'Pedido no encontrado'
    });
  }

  pedidos.splice(pedidoIndex, 1);

  res.status(200).json({
    mensaje: 'Pedido eliminado correctamente'
  });

};

// POST pedido
const createPedido = (req, res) => {

  const { cliente, producto, cantidad, total } = req.body;

  // VALIDACIONES
  if (!cliente || !producto || !cantidad || !total) {
    return res.status(400).json({
      error: 'Todos los campos son obligatorios'
    });
  }

  if (cantidad <= 0) {
    return res.status(400).json({
      error: 'La cantidad debe ser mayor a 0'
    });
  }

  if (total <= 0) {
    return res.status(400).json({
      error: 'El total debe ser mayor a 0'
    });
  }

  const nuevoPedido = {
    id: `ped-${Date.now()}`,
    cliente,
    producto,
    cantidad,
    total
  };

  pedidos.push(nuevoPedido);

  res.status(201).json({
    mensaje: 'Pedido creado correctamente',
    pedido: nuevoPedido
  });

};

module.exports = {
  getPedidos,
  createPedido,
  getPedidoById,
  updatePedido,
  deletePedido
};
