const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matkul', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_jenis_matkul: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_program_studi: {
      type: DataTypes.UUID,
      allowNull: false
    },
    kode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nama_matkul: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    matkul_inggris: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    alias: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sks_total: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sks_pertemuan: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sks_praktikum: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sks_praktik: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sks_simulasi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    feeder_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_kelompok_matkul: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'matkul',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "matkul_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
