// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'id',
  onDelete: 'CASCADE',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'id',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  //foreignKey: 'product_id',
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'placeholder'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  //foreignKey: 'product_id',
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'description'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
