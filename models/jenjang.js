const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jenjang', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_jenjang: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nama_inggris: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    normal_semester: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maks_semester: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    keterangan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    header_khs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kuliah: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jenjang',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "jenjang_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
