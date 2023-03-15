const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jenis_pengambilan', {
    id_pengambilan: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    nm_pengambilan: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    soft_delete: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'jenis_pengambilan',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "jenis_pengambilan_pkey",
        unique: true,
        fields: [
          { name: "id_pengambilan" },
        ]
      },
    ]
  });
};
