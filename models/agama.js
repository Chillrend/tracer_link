const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agama', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_agama: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'agama',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "agama_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
