const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grup_kelas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_program_studi: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_tahun_akademik: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    kode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nama_grup_kelas: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'grup_kelas',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "grup_kelas_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
