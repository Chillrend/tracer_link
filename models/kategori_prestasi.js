const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kategori_prestasi', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    nm_kategori_prestasi: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_induk_kategori: {
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'kategori_prestasi',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "kategori_prestasi_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
