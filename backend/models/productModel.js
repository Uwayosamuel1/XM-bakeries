const db = require('../config/db');

const Product = {
  create: (product, callback) => {
    const { name, price, category, quantity } = product;
    const sql = 'INSERT INTO products (name, price, category, quantity) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, price, category, quantity], callback);
  },

  findAll: (callback) => {
    db.query('SELECT * FROM products', callback);
  },

  findByCriteria: (criteria, callback) => {
    const { priceMin, priceMax, category, quantity } = criteria;
    let sql = 'SELECT * FROM products WHERE 1=1';
    const params = [];

    if (priceMin && priceMax) {
      sql += ' AND price BETWEEN ? AND ?';
      params.push(priceMin, priceMax);
    }
    if (category) {
      sql += ' AND category = ?';
      params.push(category);
    }
    if (quantity) {
      sql += ' AND quantity >= ?';
      params.push(quantity);
    }

    db.query(sql, params, callback);
  }
};

module.exports = Product;
