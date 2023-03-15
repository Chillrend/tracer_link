const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mahasiswa_meninggal', {
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
    tgl_meninggal: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    mengetahui_pemberi_sk: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mahasiswa_meninggal',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "mahasiswa_meninggal_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
