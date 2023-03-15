const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kelas_kuliah', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_program_studi: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_tahun_akademik: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_kurikulum: {
      type: DataTypes.UUID,
      allowNull: true
    },
    id_matkul: {
      type: DataTypes.UUID,
      allowNull: true
    },
    id_jenis_kelas: {
      type: DataTypes.UUID,
      allowNull: true
    },
    nama_kelas: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sks: {
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
    bahasan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    keterangan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kapasitas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jml_pertemuan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tgl_mulai: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tgl_akhir: {
      type: DataTypes.DATEONLY,
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
    },
    dokumen_rps: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    score_locked: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    status_dokumen: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'kelas_kuliah',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "kelas_kuliah_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
