const express = require ('express');
const cors = require ('cors');
// const bodyParser = require ('body-parser'); /* deprecated */ quiere decir que ya no tiene soporte disponible

// Creamos la app
const app = express();

// Conectamos con Angular
var corsOptions = {
    origin: "http://localhost:4200"
}

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

// Configuracion y conexion de la base de datos
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true    
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// Simple route
app.get("/", (req, res) => {
    res.json({ message: "Bienvenido al CRUD." });
  });

require("./app/routes/product.routes.js")(app);

// Puerto seleccionado para la conexion
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});