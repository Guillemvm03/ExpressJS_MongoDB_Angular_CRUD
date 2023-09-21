const db = require ("../models");
const Product = db.products;

// Crear un nuevo
exports.create = (req, res) => {
// Validar el contenido de la peticion
if (!req.body.product_name  || !req.body.price) {
    res.status(400).send({ message: "El producto debe de tener un nombre y un precio" });
    return;
  }

// Crear el producto
  const product = new Product({
    product_name: req.body.product_name,
    qty: req.body.qty,
    price: req.body.price
  });


//   Guardar el producto en la base de datos
    product
        .save(product)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
            err.message || "Algun error ha ocurrido al crear el producto."
            });
        });
}


exports.findAll = (req, res) => {
    // console.log('patata find');
    const product_name = req.query.product_name;
    var condition = product_name ? { product_name: { $regex: new RegExp(product_name), $options: "i" } } : {};
  
    Product.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha ocurrido un error al buscar los productos."
        });
      });

}

exports.findOne = (req, res) => {
    // Encontrara un producto con la slug indicada en la peticion
    const slug = req.params.slug;

    Product.findOne({ id : slug })
      .then(data => {
        if (!data)
          res.status(404).send({ message: "No se ha encontrado el producto con la slug: " + slug });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Ha ocurrido un error buscando el producto con la slug:" + slug });
      });

}

exports.update = (req, res) => {
    // Actualizar un producto con el id indicado en la peticion
    if (!req.body) {
        return res.status(400).send({
          message: "Los datos actualizar no pueden estar vacios"
        });
      }
    
      const slug = req.params.slug;
    
      Product.findOneAndUpdate({ id : slug }, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `No se pudo actualizar el producto con el slug: ${slug}. Es posible que el producto no exista`
            });
          } else res.send({ message: "La informacion del producto fue actualizada correctamente." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error al actualizar la informacion del producto con el slug:" + slug
          });
        });

}

exports.deleteOne = (req, res) => {
  // Eliminar un producto con el slug indicado en la peticion
  const slug = req.params.slug;

  Product.findOneAndDelete({ id : slug }, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `No se pudo eliminar el producto con la slug: ${slug}. Es posible que el producto no se haya encontrado`
        });
      } else {
        res.send({
          message: "El producto fue eliminado con exito"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se pudo eliminar el producto con el slug:" + slug
      });
    });


}

exports.deleteAll = (req, res) => {
    Product.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} productos fueron eliminados con exito`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Un error ha ocurrido al eliminar los productos."
      });
    });

}

