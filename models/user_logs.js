const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_logs', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    ip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    signin_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    signout_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_agent: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    operation_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    operation: {
      type: DataTypes.ENUM("insert","update","delete"),
      allowNull: false
    },
    target: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_logs',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "user_logs_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
