const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('history_status_mahasiswa', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_mahasiswa: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_status_mahasiswa: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_tahun_akademik: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'history_status_mahasiswa',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "history_status_mahasiswa_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
