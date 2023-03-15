const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jenis_prestasi', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_jenis_prestasi: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jenis_prestasi',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "jenis_prestasi_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
