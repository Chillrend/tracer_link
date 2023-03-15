const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pendidikan', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_pendidikan: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    kuliah: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pendidikan',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "pendidikan_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
