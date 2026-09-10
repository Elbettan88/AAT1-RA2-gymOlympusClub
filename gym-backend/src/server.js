require('dotenv').config();
const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
conectarDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas de la API
app.use('/api/clientes', require('./routes/clienteRoutes'));
app.use('/api/membresias', require('./routes/membresiaRoutes'));

// Inicializar Servidor
app.listen(PORT, () => {
    console.log('?? Servidor del Gimnasio corriendo en http://localhost:' + PORT);
});
