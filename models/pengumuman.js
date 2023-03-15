const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pengumuman', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    judul: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pesan: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tgl_mulai: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tgl_akhir: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    aktif: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'pengumuman',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "pengumuman_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
