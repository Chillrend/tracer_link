const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kalender_akademik', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_tahun_akademik: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_program_studi: {
      type: DataTypes.UUID,
      allowNull: false
    },
    kode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    semester: {
      type: DataTypes.ENUM("ganjil","genap","pendek"),
      allowNull: false
    },
    nama_kalender: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nama_pendek: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mulai_kuliah: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    akhir_kuliah: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    mulai_uts: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    akhir_uts: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    mulai_uas: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    akhir_uas: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    perwalian: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    mulai_perwalian: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    akhir_perwalian: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    krs: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    mulai_krs: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    akhir_krs: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    input_nilai: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    mulai_input_nilai: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    akhir_input_nilai: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    jml_pertemuan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    min_presensi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    aktif: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    email_akademik: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'kalender_akademik',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "kalender_akademik_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
