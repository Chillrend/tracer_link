const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('realisasi_pertemuan', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_rencana_pertemuan: {
      type: DataTypes.UUID,
      allowNull: false
    },
    materi_mengajar: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    jenis_absensi: {
      type: DataTypes.ENUM("utama","pengganti"),
      allowNull: true,
      defaultValue: "utama"
    },
    diverifikasi_oleh_mhs: {
      type: DataTypes.UUID,
      allowNull: true
    },
    team_teaching: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'realisasi_pertemuan',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "realisasi_pertemuan_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
