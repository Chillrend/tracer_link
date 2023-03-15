const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jenis_tinggal', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_jenis_tinggal: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'jenis_tinggal',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "jenis_tinggal_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
