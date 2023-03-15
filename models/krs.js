const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('krs', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_mahasiswa: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_pegawai: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_tahun_akademik: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_kelas_kuliah: {
      type: DataTypes.UUID,
      allowNull: true
    },
    acc: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    tgl_acc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    feeder_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    feeder_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    feeder_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'krs',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "krs_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
