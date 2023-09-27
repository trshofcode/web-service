var koneksi = require('../koneksi');
const Sequelize = require('sequelize');

const apadong = koneksi.define('jadwal',
  {
  	id: {
  		type: Sequelize.INTEGER,
  		primaryKey: true,
		autoIncrement: true
  	},
  	kegiatan: {
  		type: Sequelize.STRING,
  		allowNull: false
  	},
  	tanggal: {
  		type: Sequelize.DATE,
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

module.exports = apadong