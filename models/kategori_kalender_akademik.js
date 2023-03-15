const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kategori_kalender_akademik', {
    id_kat_kalender: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    nm_kat_kalender: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'kategori_kalender_akademik',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "kategori_kalender_akademik_pkey",
        unique: true,
        fields: [
          { name: "id_kat_kalender" },
        ]
      },
    ]
  });
};
