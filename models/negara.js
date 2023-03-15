const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('negara', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    nama_negara: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'negara',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "negara_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
