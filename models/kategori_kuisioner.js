const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kategori_kuisioner', {
    id_kat_kuisioner: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    nm_kategori: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'kategori_kuisioner',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "kategori_kuisioner_pkey",
        unique: true,
        fields: [
          { name: "id_kat_kuisioner" },
        ]
      },
    ]
  });
};
