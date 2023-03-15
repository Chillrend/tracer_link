const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('konversi_nilai', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_matkul: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_akt_anggota: {
      type: DataTypes.UUID,
      allowNull: true
    },
    id_akt_mahasiswa: {
      type: DataTypes.UUID,
      allowNull: true
    },
    sks: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    nilai: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    nilai_huruf: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nilai_indeks: {
      type: DataTypes.DOUBLE,
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
    }
  }, {
    sequelize,
    tableName: 'konversi_nilai',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "konversi_nilai_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
