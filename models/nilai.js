const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nilai', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_pegawai: {
      type: DataTypes.UUID,
      allowNull: true
    },
    id_mahasiswa: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_kelas_kuliah: {
      type: DataTypes.UUID,
      allowNull: false
    },
    kuis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tugas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    presensi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    uts: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    uas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    praktik: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nilai_akhir: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    up: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nh: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    na: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nhu: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nilai_indeks: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    keterangan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    publish: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    kunci_nilai: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    tgl_publish: {
      type: DataTypes.DATE,
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
    tableName: 'nilai',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "nilai_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
