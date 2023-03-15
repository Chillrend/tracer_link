const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kategori_akt_mahasiswa', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_kategori_akt: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'kategori_akt_mahasiswa',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "kategori_akt_mahasiswa_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
