const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jenis_beasiswa', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_jenis_beasiswa: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sumber: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jenis_beasiswa',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "jenis_beasiswa_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
