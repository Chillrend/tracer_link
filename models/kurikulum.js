const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kurikulum', {
    id: {
      type: DataTypes.UUID,
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
    nama_kurikulum: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sks_total: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    sks_wajib: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    sks_pilihan: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    keterangan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aktif: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    feeder_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'kurikulum',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "kurikulum_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
