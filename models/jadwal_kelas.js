const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jadwal_kelas', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_kelas_kuliah: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_ruang: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_hari: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jam_mulai: {
      type: DataTypes.TIME,
      allowNull: false
    },
    jam_akhir: {
      type: DataTypes.TIME,
      allowNull: false
    },
    praktik: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    lokasi: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    metode_pembelajaran: {
      type: DataTypes.ENUM("offline","online","hybrid"),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jadwal_kelas',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "jadwal_kelas_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
