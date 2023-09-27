var koneksi = require('../koneksi');
const Sequelize = require('sequelize');

const mbuhwes = koneksi.define('info',
  {
  	id: {
  		type: Sequelize.INTEGER,
  		primaryKey: true,
		autoIncrement: true
  	},
  	judul: {
  		type: Sequelize.STRING,
  		allowNull: false
  	},
  	konten: {
  		type: Sequelize.STRING,
  		allowNull: false
	},
	foto: {
		type: Sequelize.STRING,
		allowNull: false
	}
	  
  },
  {
  	timestamps: true,
    freezeTableName: true
  }
);

module.exports = mbuhwes