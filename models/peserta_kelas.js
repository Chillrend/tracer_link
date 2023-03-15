const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('peserta_kelas', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_kelas_kuliah: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_mahasiswa: {
      type: DataTypes.UUID,
      allowNull: false
    },
    feeder_id: {
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
    }
  }, {
    sequelize,
    tableName: 'peserta_kelas',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "peserta_kelas_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
