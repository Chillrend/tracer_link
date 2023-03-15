const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('akt_mahasiswa', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_tahun_akademik: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_kategori_akt: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_program_studi: {
      type: DataTypes.UUID,
      allowNull: true
    },
    judul: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lokasi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nomor_sk: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tgl_sk: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    jenis: {
      type: DataTypes.ENUM("0","1","0","1"),
      allowNull: true
    },
    keterangan: {
      type: DataTypes.TEXT,
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
    tableName: 'akt_mahasiswa',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "akt_mahasiswa_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
