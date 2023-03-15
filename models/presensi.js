const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('presensi', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_kelas_kuliah: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_rencana_pertemuan: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_realisasi_pertemuan: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_mahasiswa: {
      type: DataTypes.UUID,
      allowNull: false
    },
    tanggal: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("","H","I","S","A"),
      allowNull: true,
      defaultValue: ""
    },
    jml_jam_izin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    jml_jam_terlambat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    jml_menit_terlambat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    keterangan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    konfirmasi: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'presensi',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "presensi_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
