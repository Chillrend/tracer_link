const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hari', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_hari: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'hari',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "hari_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
