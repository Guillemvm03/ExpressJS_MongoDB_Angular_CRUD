module.exports = (app) => {
    const products = require ("../controllers/product.controller.js");

    var router = require('express').Router();

    // Introducir un producto
    router.post('/', products.create);

    // Mostrar todos los productos
    router.get('/', products.findAll);

    // Mostrar un solo producto
    router.get('/:id', products.findOne);

    // Actualizar la informacion de un producto
    router.put('/:id', products.update);

    // Eliminar un producto
    router.delete('/:id', products.deleteOne);

    // Eliminar todos los productos
    router.delete('/', products.deleteAll);

    app.use("/api/products", router);
}