const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pegawai', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_status_pegawai: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_negara: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_wilayah: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_agama: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_jenjang: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nidn: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nik: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gelar_depan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gelar_belakang: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nama_pegawai: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    jenis_kelamin: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tmpt_lahir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tgl_lahir: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    telp: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    jalan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rw: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    desa: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dusun: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    picture: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_sdm: {
      type: DataTypes.UUID,
      allowNull: true
    },
    feeder_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pegawai',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "pegawai_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
