const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('beasiswa_detail', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_mahasiswa: {
      type: DataTypes.UUID,
      allowNull: true
    },
    id_beasiswa: {
      type: DataTypes.UUID,
      allowNull: true
    },
    nomor_rekening: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    keterangan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aktif: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'beasiswa_detail',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "beasiswa_detail_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
