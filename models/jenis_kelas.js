const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jenis_kelas', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    nama_jenis_kelas: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jenis_kelas',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "jenis_kelas_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
