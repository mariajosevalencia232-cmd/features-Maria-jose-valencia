let transactions = [];

// CREAR PAGO PSE
const createPsePayment = (req, res) => {

  const {
    banco_codigo,
    monto,
    referencia,
    numero_documento
  } = req.body;

  if (
    !banco_codigo ||
    !monto ||
    !referencia ||
    !numero_documento
  ) {
    return res.status(400).json({
      message: 'Todos los campos son obligatorios'
    });
  }

  const transaction = {
    banco_codigo,
    monto,
    referencia,
    numero_documento,
    estado: 'APROBADO'
  };

  transactions.push(transaction);

  res.status(200).json({
    message: 'Pago procesado correctamente',
    transaction
  });

};

// CONSULTAR PAGO POR REFERENCIA
const getPsePaymentByReference = (req, res) => {

  const transaction = transactions.find(
    t => t.referencia == req.params.ref
  );

  if (!transaction) {
    return res.status(404).json({
      message: 'Transacción no encontrada'
    });
  }

  res.json(transaction);

};

module.exports = {
  createPsePayment,
  getPsePaymentByReference
};