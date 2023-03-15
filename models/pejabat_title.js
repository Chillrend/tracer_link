const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pejabat_title', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pejabat_title',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "pejabat_title_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
