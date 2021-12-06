const { Product } = require('../models');

const productData = [
  {
    id: 1,
    category: 'classic',
    details: 'All Natural',
    colors: 'Pink'
  }
];

const seedProducts = () => Product.bulkCreate(productData)

module.exports = seedProducts;