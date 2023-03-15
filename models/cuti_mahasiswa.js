const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cuti_mahasiswa', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_mahasiswa: {
      type: DataTypes.UUID,
      allowNull: false
    },
    nomor_sk: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tgl_cuti: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    id_tahun_akademik_mulai_cuti: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_tahun_akademik_selesai_cuti: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    persentase_pembayaran_ukt: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    mengetahui_pemberi_sk: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cuti_mahasiswa',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "cuti_mahasiswa_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
