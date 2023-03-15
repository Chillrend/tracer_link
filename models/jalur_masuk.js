const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jalur_masuk', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_jalur: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'jalur_masuk',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "jalur_masuk_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
