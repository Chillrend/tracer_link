const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mahasiswa_megundurkan_diri', {
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
    tgl_mungundurkan_diri: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    id_tahun_akademik: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mengetahui_pemberi_sk: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mahasiswa_megundurkan_diri',
    schema: 'siakad',
    timestamps: true
  });
};
