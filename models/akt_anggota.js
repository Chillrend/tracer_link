const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('akt_anggota', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_akt_mahasiswa: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_mahasiswa: {
      type: DataTypes.UUID,
      allowNull: false
    },
    jenis: {
      type: DataTypes.ENUM("1","2","3","1","2","3"),
      allowNull: true
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
    tableName: 'akt_anggota',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "akt_anggota_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
