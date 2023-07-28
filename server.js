require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/products");

const app = express();
const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGODB_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexión a MongoDB establecida");
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB:", error);
  });

// Middleware para el manejo de datos JSON en las peticiones
app.use(express.json());

// Rutas
app.use("/api/products", productRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
