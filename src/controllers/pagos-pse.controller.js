const procesarPagoPSE = (req, res) => {

  const { banco, usuario, valor } = req.body;

  // VALIDACIONES
  if (!banco || !usuario || !valor) {
    return res.status(400).json({
      error: 'Todos los campos son obligatorios'
    });
  }

  if (valor <= 0) {
    return res.status(400).json({
      error: 'El valor debe ser mayor a 0'
    });
  }

  // SIMULACIÓN PAGO
  const transaccion = {
    id: `pse-${Date.now()}`,
    banco,
    usuario,
    valor,
    estado: 'aprobado'
  };

  res.status(200).json({
    mensaje: 'Pago procesado correctamente',
    transaccion
  });

};

module.exports = {
  procesarPagoPSE
};