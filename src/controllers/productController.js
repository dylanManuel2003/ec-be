const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

exports.getOneProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.json(product);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error al obtener el producto requerido" });
  }
};

exports.postProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Error al agregar un nuevo producto" });
  }
};


exports.editProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al editar el producto" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndRemove(req.params.id);
    res.json(deletedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
};