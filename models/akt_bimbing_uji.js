const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('akt_bimbing_uji', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_akt_mahasiswa: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_pegawai: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_kategori_kegiatan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nomor_urut: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    jenis: {
      type: DataTypes.ENUM("0","1","0","1"),
      allowNull: true
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
    tableName: 'akt_bimbing_uji',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "akt_bimbing_uji_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
