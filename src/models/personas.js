let personas = [
  {
    id: "per-001",
    tipoDoc: "CC",
    numDoc: "1023456789",
    nombres: "María",
    apellidos: "García López",
    email: "maria.garcia@gmail.com",
    password: "maria123",
    telefono: "+573001234567",
    ciudad: "Medellín",
    activo: true,
    creadoEn: new Date().toISOString()
  },
  {
    id: "per-002",
    tipoDoc: "CC",
    numDoc: "1098765432",
    nombres: "Carlos",
    apellidos: "Mejía Restrepo",
    email: "carlos.mejia@gmail.com",
    password: "carlos123",
    telefono: "+573009876543",
    ciudad: "Bogotá",
    activo: true,
    creadoEn: new Date().toISOString()
  }
];

module.exports = personas;