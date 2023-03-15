const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pejabat', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_pegawai: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_title_pejabat: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pejabat',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "pejabat_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
