let orders = [];

// GET TODOS LOS PEDIDOS
const getOrders = (req, res) => {
  res.json(orders);
};

// CREAR PEDIDO
const createOrder = (req, res) => {

  const { cliente, productos, total } = req.body;

  if (!cliente || !productos || !total) {
    return res.status(400).json({
      message: 'Todos los campos son obligatorios'
    });
  }

  const newOrder = {
    id: orders.length + 1,
    cliente,
    productos,
    total,
    estado: 'PENDIENTE'
  };

  orders.push(newOrder);

  res.status(201).json({
    message: 'Pedido creado correctamente',
    order: newOrder
  });

};

module.exports = {
  getOrders,
  createOrder
};