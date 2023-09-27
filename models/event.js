var koneksi = require('../koneksi');
const Sequelize = require('sequelize');

const sakjose = koneksi.define('event',
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
  	tanggal: {
  		type: Sequelize.STRING,
  		allowNull: false
	},
	foto: {
		type: Sequelize.STRING,
		allowNull: false
	},
	deskripsi: {
		type: Sequelize.STRING,
		allowNull: false
	},
	jam: {
		type: Sequelize.STRING,
		allowNull: false
  	}	
  },
  {
  	timestamps: true,
    freezeTableName: true
  }
);

module.exports = sakjose