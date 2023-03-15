const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('status_mahasiswa', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    nama_status_mahasiswa: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lulus: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'status_mahasiswa',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "status_mahasiswa_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
