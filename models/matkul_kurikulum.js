const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matkul_kurikulum', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_matkul: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_kurikulum: {
      type: DataTypes.UUID,
      allowNull: false
    },
    semester: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sks_total: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    sks_pertemuan: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    sks_praktikum: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    sks_praktik: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    sks_simulasi: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    wajib: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    feeder_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    feeder_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    feeder_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'matkul_kurikulum',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "matkul_kurikulum_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
