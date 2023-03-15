const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('beasiswa', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_jenis_beasiswa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nama_beasiswa: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_periode_mulai: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_periode_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nominal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_dana: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'beasiswa',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "beasiswa_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
