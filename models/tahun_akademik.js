const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tahun_akademik', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    kode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nama_thn_akademik: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tahun: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    semester: {
      type: DataTypes.ENUM("ganjil","genap","ganjil","genap","pendek"),
      allowNull: true
    },
    aktif: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'tahun_akademik',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "tahun_akademik_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
