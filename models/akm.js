const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('akm', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_tahun_akademik: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_status_mahasiswa: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_mahasiswa: {
      type: DataTypes.UUID,
      allowNull: false
    },
    ips: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    ipk: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    sks_semester: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sks_total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    valid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    keterangan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nomor_sk: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tgl_sk: {
      type: DataTypes.DATEONLY,
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
    tableName: 'akm',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "akm_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
