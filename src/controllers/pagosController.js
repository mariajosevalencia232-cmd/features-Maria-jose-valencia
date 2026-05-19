const pagos = require('../models/pagos');

const crearPago = (req, res) => {
  const { banco_codigo, tipo_persona, tipo_documento, numero_documento, monto, descripcion, url_respuesta } = req.body;

  if (!banco_codigo || !tipo_persona || !tipo_documento || !numero_documento || !monto || !descripcion || !url_respuesta) {
    return res.status(400).json({ mensaje: "Faltan campos requeridos: banco_codigo, tipo_persona, tipo_documento, numero_documento, monto, descripcion, url_respuesta" });
  }

  if (!["N", "J"].includes(tipo_persona)) {
    return res.status(400).json({ mensaje: "tipo_persona debe ser N (Natural) o J (Jurídica)" });
  }

  if (!["CC", "NIT", "CE"].includes(tipo_documento)) {
    return res.status(400).json({ mensaje: "tipo_documento debe ser CC, NIT o CE" });
  }

  if (monto <= 0) {
    return res.status(400).json({ mensaje: "El monto debe ser mayor a 0" });
  }

  const nuevo = {
    referencia: "TXN-" + Date.now(),
    banco_codigo,
    tipo_persona,
    tipo_documento,
    numero_documento: "**CIFRADO**",
    monto,
    descripcion,
    url_respuesta,
    estado: "PENDIENTE",
    fecha: new Date().toISOString()
  };

  pagos.push(nuevo);
  res.status(200).json(nuevo);
};

const consultarPago = (req, res) => {
  const pago = pagos.find(p => p.referencia === req.params.ref);
  if (!pago) return res.status(404).json({ mensaje: "Transacción no encontrada" });
  res.json(pago);
};
const actualizarEstadoPago = (req, res) => {
  const pago = pagos.find(p => p.referencia === req.params.ref);
  if (!pago) return res.status(404).json({ mensaje: "Transacción no encontrada" });
  const { estado } = req.body;
  if (!["APROBADO", "RECHAZADO"].includes(estado)) {
    return res.status(400).json({ mensaje: "Estado debe ser APROBADO o RECHAZADO" });
  }
  pago.estado = estado;
  res.json(pago);
};
module.exports = { crearPago, consultarPago, actualizarEstadoPago };

