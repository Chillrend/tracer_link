const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dosen_ajar', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_pegawai: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_jadwal: {
      type: DataTypes.UUID,
      allowNull: true
    },
    id_kelas_kuliah: {
      type: DataTypes.UUID,
      allowNull: false
    },
    sks: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    rencana_pertemuan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    realisasi_pertemuan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    input_nilai: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    keterangan: {
      type: DataTypes.STRING(255),
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
    tableName: 'dosen_ajar',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "dosen_ajar_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
