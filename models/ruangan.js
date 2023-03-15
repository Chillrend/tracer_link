const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ruangan', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_jurusan: {
      type: DataTypes.UUID,
      allowNull: true
    },
    kode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nama_ruang: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    jenis: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    gedung: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    kapasitas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kapasitas_uts: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kapasitas_uas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    aktif: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'ruangan',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "ruangan_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
