const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('role_permissions', {
    role_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    permission_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'role_permissions',
    schema: 'siakad',
    timestamps: false,
    indexes: [
      {
        name: "role_permissions_pkey",
        unique: true,
        fields: [
          { name: "role_id" },
          { name: "permission_id" },
        ]
      },
    ]
  });
};
