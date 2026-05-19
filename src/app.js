const express = require('express');
const cors = require('cors');

const app = express();

const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const pseRoutes = require('./routes/pseRoutes');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.use('/api/productos', productRoutes);
app.use('/api/pedidos', orderRoutes);
app.use('/api/pagos-pse', pseRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || 'Error interno del servidor'
  });
});
module.exports = app;
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API Coquito Amarillo funcionando');
});

// IMPORTAR RUTAS
const productosRouter = require('./routes/productos');
const pedidosRoutes = require('./routes/pedidos');
const pagosPseRoutes = require('./routes/pagos-pse');

// USAR RUTAS
app.use('/api/productos', productosRouter);
app.use('/api/pedidos', pedidosRoutes);
app.use('/api/pagos-pse', pagosPseRoutes);

// Puerto
const PORT = process.env.PORT || 3000;

// Levantar servidor (SIEMPRE AL FINAL)
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

const productosRouter = require('./routes/productos');
const pedidosRouter = require('./routes/pedidos');
const pseRouter = require('./routes/pagos');
const personasRouter = require('./routes/personas');

app.use('/api/productos', productosRouter);
app.use('/api/pedidos', pedidosRouter);
app.use('/api/pagos-pse', pseRouter);
app.use('/api/personas', personasRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));

module.exports = app;
