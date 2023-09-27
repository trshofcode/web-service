var koneksi = require('../koneksi');
const Sequelize = require('sequelize');

const inidong = koneksi.define('video',
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
  	videoId: {
  		type: Sequelize.STRING,
  		allowNull: false
  	}
  },
  {
  	timestamps: true,
    freezeTableName: true
  }
);

module.exports = inidong