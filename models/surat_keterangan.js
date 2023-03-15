const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('surat_keterangan', {
    id_surat_keterangan: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_mahasiswa: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_jns_surat: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_pengambilan: {
      type: DataTypes.UUID,
      allowNull: false
    },
    status_surat: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "belum \/ sudah"
    },
    no_surat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_tahun_akademik: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    semester_mhs: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    tgl_ttd: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    soft_delete: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    tgl_mengajukan: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'surat_keterangan',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "surat_keterangan_pkey",
        unique: true,
        fields: [
          { name: "id_surat_keterangan" },
        ]
      },
    ]
  });
};
