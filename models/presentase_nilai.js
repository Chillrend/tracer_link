const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('presentase_nilai', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_kelas_kuliah: {
      type: DataTypes.UUID,
      allowNull: false
    },
    kuis: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tugas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    presensi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uts: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    praktik: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'presentase_nilai',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "presentase_nilai_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
