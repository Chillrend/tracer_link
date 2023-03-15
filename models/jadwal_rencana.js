const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jadwal_rencana', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    jenis_rencana: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_ruang: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_pegawai: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_hari: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_kelas_kuliah: {
      type: DataTypes.UUID,
      allowNull: false
    },
    jml_pertemuan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    jam_mulai: {
      type: DataTypes.TIME,
      allowNull: false
    },
    jam_akhir: {
      type: DataTypes.TIME,
      allowNull: false
    },
    jenis: {
      type: DataTypes.ENUM("praktik","teori","uts","uas","remidi"),
      allowNull: true
    },
    metode_pembelajaran: {
      type: DataTypes.ENUM("offline","online","hybrid"),
      allowNull: true
    },
    lokasi: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sks: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("terjadwal","selesai","ganti"),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jadwal_rencana',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "jadwal_rencana_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
