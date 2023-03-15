const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reg_pd', {
    id_reg_pd: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_minat_bidang: {
      type: DataTypes.UUID,
      allowNull: true
    },
    id_pd: {
      type: DataTypes.UUID,
      allowNull: true
    },
    id_sms: {
      type: DataTypes.UUID,
      allowNull: true
    },
    nipd: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    tgl_masuk_sp: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tgl_keluar: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ket: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    skhun: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    no_peserta_ujian: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    no_seri_ijazah: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    asal_data_ijazah: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    bidang_mayor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bidang_minor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mulai_smt: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    sks_diakui: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    jalur_skripsi: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    judul_skripsi: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    bln_awal_bimbingan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    bln_akhir_bimbingan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    smt_yudisium: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    sk_yudisium: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    tgl_sk_yudisium: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ipk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    sert_prof: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    a_pindah_mhs_asing: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    id_pt_asal: {
      type: DataTypes.UUID,
      allowNull: true
    },
    id_prodi_asal: {
      type: DataTypes.UUID,
      allowNull: true
    },
    nm_pt_asal: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nm_prodi_asal: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    biaya_masuk_kuliah: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    status_uji_kompetensi: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    id_jns_daftar: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    id_jns_keluar: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    id_jalur_masuk: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    id_pembiayaan: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    soft_delete: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    id_grup_kelas: {
      type: DataTypes.INTEGER,
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
    pemberi_sk: {
      type: DataTypes.STRING,
      allowNull: true
    },
    periode_keluar: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'reg_pd',
    schema: 'siakad',
    timestamps: true
  });
};
