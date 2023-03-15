const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kelulusan', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_tahun_akademik: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_mahasiswa: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_program_studi: {
      type: DataTypes.UUID,
      allowNull: true
    },
    id_status_mahasiswa: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nama_mahasiswa: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tgl_lulus: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sk_yudisium: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tgl_yudisium: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ipk: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nomor_ijazah: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tahun: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    keterangan: {
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
    judul_ta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    judul_ta_inggris: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nomor_surat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tanggal_surat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    no_transkrip: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'kelulusan',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "kelulusan_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
