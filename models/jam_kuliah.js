const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jam_kuliah', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    jam: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jam_kuliah',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "jam_kuliah_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
