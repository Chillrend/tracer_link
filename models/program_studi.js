const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('program_studi', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_pegawai: {
      type: DataTypes.UUID,
      allowNull: true
    },
    id_jurusan: {
      type: DataTypes.UUID,
      allowNull: true
    },
    id_jenjang: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nama_prodi: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nama_prodi_inggris: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    alias: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gelar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gelar_inggris: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bidang_studi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    maks_sks: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    akreditasi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nomor_akreditasi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tgl_akreditasi: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    mode: {
      type: DataTypes.ENUM("0","1","0","1"),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    feeder_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'program_studi',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "program_studi_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
