const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pertanyaan_kuisioner', {
    id_pertanyaan_kuisioner: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    pertanyaan: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_kat_kuisioner: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pertanyaan_kuisioner',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "pertanyaan_kuisioner_pkey",
        unique: true,
        fields: [
          { name: "id_pertanyaan_kuisioner" },
        ]
      },
    ]
  });
};
