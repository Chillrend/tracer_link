const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('daftar_jenjang', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    jenjang: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    jenjang_inggris: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    keterangan: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lama_studi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kode_epsbed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    header_khs: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'daftar_jenjang',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "daftar_jenjang_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
