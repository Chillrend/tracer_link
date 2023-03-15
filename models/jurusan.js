const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jurusan', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_pegawai: {
      type: DataTypes.UUID,
      allowNull: true
    },
    id_sekretaris: {
      type: DataTypes.UUID,
      allowNull: true
    },
    kode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nama_jurusan: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nama_inggris: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    alias: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jurusan',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "jurusan_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
