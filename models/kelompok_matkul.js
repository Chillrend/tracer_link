const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kelompok_matkul', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    keterangan: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'kelompok_matkul',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "kelompok_matkul_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
