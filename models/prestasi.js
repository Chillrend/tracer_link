const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prestasi', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_mahasiswa: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_jenis_prestasi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_level_prestasi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_akt_mahasiswa: {
      type: DataTypes.UUID,
      allowNull: true
    },
    nama_prestasi: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tahun_prestasi: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    penyelenggara: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    peringkat: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    },
    id_kategori_prestasi: {
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'prestasi',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "prestasi_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
