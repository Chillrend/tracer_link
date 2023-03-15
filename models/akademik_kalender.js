const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('akademik_kalender', {
    id_kalender_akademik: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_tahun_akademik: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    semester: {
      type: DataTypes.ENUM("ganjil","genap","pendek"),
      allowNull: true
    },
    id_kat_kalender: {
      type: DataTypes.UUID,
      allowNull: true
    },
    tgl_mulai: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tgl_selesai: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'akademik_kalender',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "akademik_kalender_pkey",
        unique: true,
        fields: [
          { name: "id_kalender_akademik" },
        ]
      },
    ]
  });
};
