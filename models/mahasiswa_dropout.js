const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mahasiswa_dropout', {
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
    tgl_dropout: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    id_tahun_akademik_mulai_dropout: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mengetahui_pemberi_sk: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mahasiswa_dropout',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "mahasiswa_dropout_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
