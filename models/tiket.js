var koneksi = require('../koneksi');
const Sequelize = require('sequelize');

const apaya = koneksi.define('tiket',
  {
  	id: {
  		type: Sequelize.INTEGER,
  		primaryKey: true,
		autoIncrement: true
  	},  	
  	paket: {
  		type: Sequelize.STRING,
  		allowNull: false
      },
    harga: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
  },
  {
  	timestamps: true,
    freezeTableName: true
  }
);

module.exports = apaya