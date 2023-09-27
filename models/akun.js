var koneksi = require('../koneksi');
const Sequelize = require('sequelize');

const dobleh = koneksi.define('akun',
  {
  	username: {
  		type: Sequelize.STRING,
  		primaryKey: true
  	},
  	nama: {
  		type: Sequelize.STRING,
  		allowNull: false
  	},
  	jk: {
  		type: Sequelize.STRING,
  		allowNull: false
      },
    alamat: {
  		type: Sequelize.STRING,
  		allowNull: false
      },
    no_telp: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    pass: {
        type: Sequelize.STRING,
        allowNull: false
    }
  },
  {
  	timestamps: true,
    freezeTableName: true
  }
);

module.exports = dobleh