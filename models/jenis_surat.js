const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jenis_surat', {
    id_jns_surat: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    nm_jns_surat: {
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
    tableName: 'jenis_surat',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "jenis_surat_pkey",
        unique: true,
        fields: [
          { name: "id_jns_surat" },
        ]
      },
    ]
  });
};
