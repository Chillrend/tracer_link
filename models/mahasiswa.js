const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mahasiswa', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_jalur_masuk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_program_studi: {
      type: DataTypes.UUID,
      allowNull: true
    },
    id_pegawai: {
      type: DataTypes.UUID,
      allowNull: true
    },
    id_status_mahasiswa: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_grup_kelas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_agama: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_jenis_tinggal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_transportasi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_wilayah: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_tahun_akademik: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_negara: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_pembiayaan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_konsentrasi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nik: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nisn: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nim: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nama_mhs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    jenis_kelamin: {
      type: DataTypes.ENUM("L","P","*"),
      allowNull: true
    },
    gol_darah: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    telp_rumah: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    npwp: {
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
    kode_pos: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    picture: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "student_default_pic.jpg"
    },
    penerima_kps: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    nomor_kps: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nik_ayah: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nama_ayah: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tgl_lahir_ayah: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_pendidikan_ayah: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_pekerjaan_ayah: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_pendapatan_ayah: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nik_ibu: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nama_ibu: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tgl_lahir_ibu: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_pendidikan_ibu: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_pekerjaan_ibu: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_pendapatan_ibu: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nama_wali: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tgl_lahir_wali: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_pendidikan_wali: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_pekerjaan_wali: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_pendapatan_wali: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tanggal_masuk: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    asal_sekolah: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bidang_asal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nilai_ijazah: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nilai_un: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    kebutuhan_khusus: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    keterangan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    biaya_kuliah: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    status_pd: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_reg: {
      type: DataTypes.UUID,
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
    },
    sk_dosen_wali: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_jenis_kelas: {
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mahasiswa',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "mahasiswa_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
