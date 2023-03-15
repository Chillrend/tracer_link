const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('konsentrasi', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_program_studi: {
      type: DataTypes.UUID,
      allowNull: false
    },
    nama_konsentrasi: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'konsentrasi',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "konsentrasi_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
