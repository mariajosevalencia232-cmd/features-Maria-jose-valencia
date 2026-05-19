const personas = require('../models/personas');

const getPersonas = (req, res) => {
  const lista = personas.map(p => ({
    ...p,
    numDoc: '****' + p.numDoc.slice(-4),
    password: undefined
  }));
  res.json(lista);
};

const getPersonaById = (req, res) => {
  const persona = personas.find(p => p.id === req.params.id);
  if (!persona) return res.status(404).json({ mensaje: "Persona no encontrada" });
  const { password, ...data } = persona;
  res.json(data);
};

const createPersona = (req, res) => {
  const { tipoDoc, numDoc, nombres, apellidos, email, telefono, ciudad, password } = req.body;
  if (!tipoDoc || !numDoc || !nombres || !apellidos || !email || !password) {
    return res.status(400).json({ mensaje: "Faltan campos requeridos" });
  }
  if (password.length < 6) {
    return res.status(400).json({ mensaje: "La contraseña debe tener mínimo 6 caracteres" });
  }
  const existe = personas.find(p => p.numDoc === numDoc || p.email === email);
  if (existe) return res.status(409).json({ mensaje: "Ya existe una cuenta con ese documento o correo" });
  const nueva = {
    id: "per-" + String(personas.length + 1).padStart(3, '0'),
    tipoDoc, numDoc, nombres, apellidos, email, password,
    telefono: telefono || "",
    ciudad: ciudad || "",
    activo: true,
    creadoEn: new Date().toISOString()
  };
  personas.push(nueva);
  const { password: _, ...respuesta } = nueva;
  res.status(201).json(respuesta);
};

const loginPersona = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ mensaje: "Email y contraseña son requeridos" });
  }
  const persona = personas.find(p => p.email === email && p.password === password);
  if (!persona) {
    return res.status(401).json({ mensaje: "Correo o contraseña incorrectos" });
  }
  if (!persona.activo) {
    return res.status(403).json({ mensaje: "Cuenta desactivada" });
  }
  const { password: _, ...data } = persona;
  res.json({ mensaje: "Login exitoso", persona: data });
};

const updatePersona = (req, res) => {
  const persona = personas.find(p => p.id === req.params.id);
  if (!persona) return res.status(404).json({ mensaje: "Persona no encontrada" });
  const { nombres, apellidos, email, telefono, ciudad } = req.body;
  if (nombres) persona.nombres = nombres;
  if (apellidos) persona.apellidos = apellidos;
  if (email) persona.email = email;
  if (telefono) persona.telefono = telefono;
  if (ciudad) persona.ciudad = ciudad;
  const { password: _, ...data } = persona;
  res.json(data);
};

const deletePersona = (req, res) => {
  const persona = personas.find(p => p.id === req.params.id);
  if (!persona) return res.status(404).json({ mensaje: "Persona no encontrada" });
  persona.activo = false;
  res.status(204).send();
};

module.exports = { getPersonas, getPersonaById, createPersona, loginPersona, updatePersona, deletePersona };