const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wilayah', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_wilayah: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    wilayah_induk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    level_wilayah: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wilayah',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "wilayah_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
