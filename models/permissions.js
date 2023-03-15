const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('permissions', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    display_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    guard_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'permissions',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "permissions_name_key",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "permissions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
