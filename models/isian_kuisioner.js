const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('isian_kuisioner', {
    id_isian_kuisioner: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_tahun_akademik: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    id_kelas_kuliah: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_pd: {
      type: DataTypes.UUID,
      allowNull: false
    },
    penilaian: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'isian_kuisioner',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "isian_kuisioner_pkey",
        unique: true,
        fields: [
          { name: "id_isian_kuisioner" },
        ]
      },
    ]
  });
};
