const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skala_nilai', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_program_studi: {
      type: DataTypes.UUID,
      allowNull: false
    },
    nilai_huruf: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nilai_indeks: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    nilai_min: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    nilai_maks: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    tgl_mulai: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tgl_akhir: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    feeder_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'skala_nilai',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "skala_nilai_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
