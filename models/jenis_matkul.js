const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jenis_matkul', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    nama_jenis_matkul: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'jenis_matkul',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "jenis_matkul_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
