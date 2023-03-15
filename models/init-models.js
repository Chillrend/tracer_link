var DataTypes = require("sequelize").DataTypes;
var _MeetingRealizationTeamTeachings = require("./MeetingRealizationTeamTeachings");
var _SequelizeMeta = require("./SequelizeMeta");
var _agama = require("./agama");
var _akademik_kalender = require("./akademik_kalender");
var _akm = require("./akm");
var _akt_anggota = require("./akt_anggota");
var _akt_bimbing_uji = require("./akt_bimbing_uji");
var _akt_mahasiswa = require("./akt_mahasiswa");
var _beasiswa = require("./beasiswa");
var _beasiswa_detail = require("./beasiswa_detail");
var _cuti_mahasiswa = require("./cuti_mahasiswa");
var _daftar_jenjang = require("./daftar_jenjang");
var _dosen_ajar = require("./dosen_ajar");
var _grup_kelas = require("./grup_kelas");
var _hari = require("./hari");
var _history_status_mahasiswa = require("./history_status_mahasiswa");
var _isian_kuisioner = require("./isian_kuisioner");
var _jadwal_kelas = require("./jadwal_kelas");
var _jadwal_rencana = require("./jadwal_rencana");
var _jalur_masuk = require("./jalur_masuk");
var _jam_kuliah = require("./jam_kuliah");
var _jenis_beasiswa = require("./jenis_beasiswa");
var _jenis_kelas = require("./jenis_kelas");
var _jenis_matkul = require("./jenis_matkul");
var _jenis_pengambilan = require("./jenis_pengambilan");
var _jenis_prestasi = require("./jenis_prestasi");
var _jenis_surat = require("./jenis_surat");
var _jenis_tinggal = require("./jenis_tinggal");
var _jenjang = require("./jenjang");
var _jurusan = require("./jurusan");
var _kalender_akademik = require("./kalender_akademik");
var _kategori_akt_mahasiswa = require("./kategori_akt_mahasiswa");
var _kategori_kalender_akademik = require("./kategori_kalender_akademik");
var _kategori_kegiatan = require("./kategori_kegiatan");
var _kategori_kuisioner = require("./kategori_kuisioner");
var _kategori_prestasi = require("./kategori_prestasi");
var _kelas_kuliah = require("./kelas_kuliah");
var _kelas_kuliah_jadwal = require("./kelas_kuliah_jadwal");
var _kelompok_matkul = require("./kelompok_matkul");
var _kelulusan = require("./kelulusan");
var _konsentrasi = require("./konsentrasi");
var _konversi_nilai = require("./konversi_nilai");
var _krs = require("./krs");
var _kurikulum = require("./kurikulum");
var _level_prestasi = require("./level_prestasi");
var _mahasiswa = require("./mahasiswa");
var _mahasiswa_dropout = require("./mahasiswa_dropout");
var _mahasiswa_megundurkan_diri = require("./mahasiswa_megundurkan_diri");
var _mahasiswa_meninggal = require("./mahasiswa_meninggal");
var _mahasiswa_tanpa_keterangan = require("./mahasiswa_tanpa_keterangan");
var _matkul = require("./matkul");
var _matkul_kurikulum = require("./matkul_kurikulum");
var _negara = require("./negara");
var _nilai = require("./nilai");
var _pegawai = require("./pegawai");
var _pejabat = require("./pejabat");
var _pejabat_title = require("./pejabat_title");
var _pekerjaan = require("./pekerjaan");
var _pembiayaan = require("./pembiayaan");
var _pendapatan = require("./pendapatan");
var _pendidikan = require("./pendidikan");
var _pengumuman = require("./pengumuman");
var _permissions = require("./permissions");
var _pertanyaan_kuisioner = require("./pertanyaan_kuisioner");
var _peserta_kelas = require("./peserta_kelas");
var _presensi = require("./presensi");
var _presentase_nilai = require("./presentase_nilai");
var _prestasi = require("./prestasi");
var _program_studi = require("./program_studi");
var _realisasi_pertemuan = require("./realisasi_pertemuan");
var _reg_pd = require("./reg_pd");
var _rencana_pertemuan = require("./rencana_pertemuan");
var _role_permissions = require("./role_permissions");
var _roles = require("./roles");
var _ruangan = require("./ruangan");
var _settings = require("./settings");
var _simpeg_employees = require("./simpeg-employees");
var _skala_nilai = require("./skala_nilai");
var _status_mahasiswa = require("./status_mahasiswa");
var _status_pegawai = require("./status_pegawai");
var _surat_keterangan = require("./surat_keterangan");
var _tahun_akademik = require("./tahun_akademik");
var _transportasi = require("./transportasi");
var _user_logs = require("./user_logs");
var _user_roles = require("./user_roles");
var _users = require("./users");
var _wilayah = require("./wilayah");

function initModels(sequelize) {
  var MeetingRealizationTeamTeachings = _MeetingRealizationTeamTeachings(sequelize, DataTypes);
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var agama = _agama(sequelize, DataTypes);
  var akademik_kalender = _akademik_kalender(sequelize, DataTypes);
  var akm = _akm(sequelize, DataTypes);
  var akt_anggota = _akt_anggota(sequelize, DataTypes);
  var akt_bimbing_uji = _akt_bimbing_uji(sequelize, DataTypes);
  var akt_mahasiswa = _akt_mahasiswa(sequelize, DataTypes);
  var beasiswa = _beasiswa(sequelize, DataTypes);
  var beasiswa_detail = _beasiswa_detail(sequelize, DataTypes);
  var cuti_mahasiswa = _cuti_mahasiswa(sequelize, DataTypes);
  var daftar_jenjang = _daftar_jenjang(sequelize, DataTypes);
  var dosen_ajar = _dosen_ajar(sequelize, DataTypes);
  var grup_kelas = _grup_kelas(sequelize, DataTypes);
  var hari = _hari(sequelize, DataTypes);
  var history_status_mahasiswa = _history_status_mahasiswa(sequelize, DataTypes);
  var isian_kuisioner = _isian_kuisioner(sequelize, DataTypes);
  var jadwal_kelas = _jadwal_kelas(sequelize, DataTypes);
  var jadwal_rencana = _jadwal_rencana(sequelize, DataTypes);
  var jalur_masuk = _jalur_masuk(sequelize, DataTypes);
  var jam_kuliah = _jam_kuliah(sequelize, DataTypes);
  var jenis_beasiswa = _jenis_beasiswa(sequelize, DataTypes);
  var jenis_kelas = _jenis_kelas(sequelize, DataTypes);
  var jenis_matkul = _jenis_matkul(sequelize, DataTypes);
  var jenis_pengambilan = _jenis_pengambilan(sequelize, DataTypes);
  var jenis_prestasi = _jenis_prestasi(sequelize, DataTypes);
  var jenis_surat = _jenis_surat(sequelize, DataTypes);
  var jenis_tinggal = _jenis_tinggal(sequelize, DataTypes);
  var jenjang = _jenjang(sequelize, DataTypes);
  var jurusan = _jurusan(sequelize, DataTypes);
  var kalender_akademik = _kalender_akademik(sequelize, DataTypes);
  var kategori_akt_mahasiswa = _kategori_akt_mahasiswa(sequelize, DataTypes);
  var kategori_kalender_akademik = _kategori_kalender_akademik(sequelize, DataTypes);
  var kategori_kegiatan = _kategori_kegiatan(sequelize, DataTypes);
  var kategori_kuisioner = _kategori_kuisioner(sequelize, DataTypes);
  var kategori_prestasi = _kategori_prestasi(sequelize, DataTypes);
  var kelas_kuliah = _kelas_kuliah(sequelize, DataTypes);
  var kelas_kuliah_jadwal = _kelas_kuliah_jadwal(sequelize, DataTypes);
  var kelompok_matkul = _kelompok_matkul(sequelize, DataTypes);
  var kelulusan = _kelulusan(sequelize, DataTypes);
  var konsentrasi = _konsentrasi(sequelize, DataTypes);
  var konversi_nilai = _konversi_nilai(sequelize, DataTypes);
  var krs = _krs(sequelize, DataTypes);
  var kurikulum = _kurikulum(sequelize, DataTypes);
  var level_prestasi = _level_prestasi(sequelize, DataTypes);
  var mahasiswa = _mahasiswa(sequelize, DataTypes);
  var mahasiswa_dropout = _mahasiswa_dropout(sequelize, DataTypes);
  var mahasiswa_megundurkan_diri = _mahasiswa_megundurkan_diri(sequelize, DataTypes);
  var mahasiswa_meninggal = _mahasiswa_meninggal(sequelize, DataTypes);
  var mahasiswa_tanpa_keterangan = _mahasiswa_tanpa_keterangan(sequelize, DataTypes);
  var matkul = _matkul(sequelize, DataTypes);
  var matkul_kurikulum = _matkul_kurikulum(sequelize, DataTypes);
  var negara = _negara(sequelize, DataTypes);
  var nilai = _nilai(sequelize, DataTypes);
  var pegawai = _pegawai(sequelize, DataTypes);
  var pejabat = _pejabat(sequelize, DataTypes);
  var pejabat_title = _pejabat_title(sequelize, DataTypes);
  var pekerjaan = _pekerjaan(sequelize, DataTypes);
  var pembiayaan = _pembiayaan(sequelize, DataTypes);
  var pendapatan = _pendapatan(sequelize, DataTypes);
  var pendidikan = _pendidikan(sequelize, DataTypes);
  var pengumuman = _pengumuman(sequelize, DataTypes);
  var permissions = _permissions(sequelize, DataTypes);
  var pertanyaan_kuisioner = _pertanyaan_kuisioner(sequelize, DataTypes);
  var peserta_kelas = _peserta_kelas(sequelize, DataTypes);
  var presensi = _presensi(sequelize, DataTypes);
  var presentase_nilai = _presentase_nilai(sequelize, DataTypes);
  var prestasi = _prestasi(sequelize, DataTypes);
  var program_studi = _program_studi(sequelize, DataTypes);
  var realisasi_pertemuan = _realisasi_pertemuan(sequelize, DataTypes);
  var reg_pd = _reg_pd(sequelize, DataTypes);
  var rencana_pertemuan = _rencana_pertemuan(sequelize, DataTypes);
  var role_permissions = _role_permissions(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var ruangan = _ruangan(sequelize, DataTypes);
  var settings = _settings(sequelize, DataTypes);
  var simpeg_employees = _simpeg_employees(sequelize, DataTypes);
  var skala_nilai = _skala_nilai(sequelize, DataTypes);
  var status_mahasiswa = _status_mahasiswa(sequelize, DataTypes);
  var status_pegawai = _status_pegawai(sequelize, DataTypes);
  var surat_keterangan = _surat_keterangan(sequelize, DataTypes);
  var tahun_akademik = _tahun_akademik(sequelize, DataTypes);
  var transportasi = _transportasi(sequelize, DataTypes);
  var user_logs = _user_logs(sequelize, DataTypes);
  var user_roles = _user_roles(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var wilayah = _wilayah(sequelize, DataTypes);


  return {
    MeetingRealizationTeamTeachings,
    SequelizeMeta,
    agama,
    akademik_kalender,
    akm,
    akt_anggota,
    akt_bimbing_uji,
    akt_mahasiswa,
    beasiswa,
    beasiswa_detail,
    cuti_mahasiswa,
    daftar_jenjang,
    dosen_ajar,
    grup_kelas,
    hari,
    history_status_mahasiswa,
    isian_kuisioner,
    jadwal_kelas,
    jadwal_rencana,
    jalur_masuk,
    jam_kuliah,
    jenis_beasiswa,
    jenis_kelas,
    jenis_matkul,
    jenis_pengambilan,
    jenis_prestasi,
    jenis_surat,
    jenis_tinggal,
    jenjang,
    jurusan,
    kalender_akademik,
    kategori_akt_mahasiswa,
    kategori_kalender_akademik,
    kategori_kegiatan,
    kategori_kuisioner,
    kategori_prestasi,
    kelas_kuliah,
    kelas_kuliah_jadwal,
    kelompok_matkul,
    kelulusan,
    konsentrasi,
    konversi_nilai,
    krs,
    kurikulum,
    level_prestasi,
    mahasiswa,
    mahasiswa_dropout,
    mahasiswa_megundurkan_diri,
    mahasiswa_meninggal,
    mahasiswa_tanpa_keterangan,
    matkul,
    matkul_kurikulum,
    negara,
    nilai,
    pegawai,
    pejabat,
    pejabat_title,
    pekerjaan,
    pembiayaan,
    pendapatan,
    pendidikan,
    pengumuman,
    permissions,
    pertanyaan_kuisioner,
    peserta_kelas,
    presensi,
    presentase_nilai,
    prestasi,
    program_studi,
    realisasi_pertemuan,
    reg_pd,
    rencana_pertemuan,
    role_permissions,
    roles,
    ruangan,
    settings,
    simpeg_employees,
    skala_nilai,
    status_mahasiswa,
    status_pegawai,
    surat_keterangan,
    tahun_akademik,
    transportasi,
    user_logs,
    user_roles,
    users,
    wilayah,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
