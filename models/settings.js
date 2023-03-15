const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('settings', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    group: {
      type: DataTypes.ENUM("general","config","image","feeder"),
      allowNull: false
    },
    option: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    label: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_default: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    display_suffix: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_show: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'settings',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "settings_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
