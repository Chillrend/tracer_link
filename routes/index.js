var express = require('express');
var router = express.Router();
const moment = require('moment');

const sequelize = require('./helpers/sequelize');
const initModels = require('../models/init-models');
const { Op } = require('sequelize');


const models = initModels(sequelize);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mhs', async function (req, res, next) {

  const nim = req.query.nim;

  if(nim.length < 6){
    res.json({
      error: 401,
      message: 'NIM must more than 5 character'
    })
    return;
  }

  let opt = {
    raw: true,
    where: {
      nim: {
        [Op.startsWith]: nim
      }
    }
  }

  const lulusan = await models.mahasiswa.findAll(opt);

  const mhs_obj = await Promise.all(lulusan.map(async (mhs) => {
    const prodi = await models.program_studi.findByPk(mhs.id_program_studi,{
      raw: true,
    })

    const jurusan = await models.jurusan.findByPk(prodi.id_jurusan, {
      raw: true,
    })

    const tgl_kelulusan = await models.kelulusan.findOne({
      raw: true,
      where: {
        id_mahasiswa: mhs.id,
      }
    })

    let th_lulus = null;

    if(tgl_kelulusan !== undefined && tgl_kelulusan !== null){
      th_lulus = moment(tgl_kelulusan.tgl_lulus).year();
    }

    return {
      nama: mhs.nama_mhs,
      nim: mhs.nim,
      kode_prodi: prodi.kode,
      nama_prodi: prodi.nama_prodi,
      kode_jurusan: jurusan.kode !== null ? jurusan.kode : null,
      nama_jurusan: jurusan.kode !== null ? jurusan.nama_jurusan : null,
      th_lulusan: th_lulus,
    }

  }))

  return res.json(mhs_obj);
});

router.get('/mhs_tahun_akademik', async function (req, res, next) {

  const nim = req.query.nim;

  if(nim.length < 6){
    res.json({
      error: 401,
      message: 'NIM must more than 5 character'
    })
    return;
  }

  let opt = {
    raw: true,
    where: {
      nim: {
        [Op.eq]: nim
      }
    }
  }

  const mhsw = await models.mahasiswa.findOne(opt);

  const prodi = await models.program_studi.findByPk(mhsw.id_program_studi,{
    raw: true,
  })

  const jurusan = await models.jurusan.findByPk(prodi.id_jurusan, {
    raw: true,
  });

  const tahun_akademik = await models.tahun_akademik.findOne({
    raw: true,
    where: {
      id: mhsw.id_tahun_akademik,
    }
  })

  let th_akademik = null;

  if(tahun_akademik !== undefined && tahun_akademik !== null){
    th_akademik = tahun_akademik.tahun;
  }

  let mhs_obj = {
    nama: mhsw.nama_mhs,
    nim: mhsw.nim,
    kode_prodi: prodi.kode,
    nama_prodi: prodi.nama_prodi,
    kode_jurusan: jurusan.kode !== null ? jurusan.kode : null,
    nama_jurusan: jurusan.kode !== null ? jurusan.nama_jurusan : null,
    th_akademik: tahun_akademik.tahun,
  }

  return res.json(mhs_obj);

});

router.get('/');
router.get('/mhsprodi', async function (req, res, next) {
  const nim = req.query.nim;

  const lulusan = await models.mahasiswa.findAll({
    raw: true,
    where: {
      nim: {
        [Op.startsWith]: nim
      }
    }
  });

  const mhs_obj = await Promise.all(lulusan.map(async (mhs) => {
    const prodi = await models.program_studi.findByPk(mhs.id_program_studi,{
      raw: true,
    })

    return {
      nama: mhs.nama_mhs,
      nim: mhs.nim,
      kode_prodi: prodi.kode,
      nama_prodi: prodi.nama_prodi,
    }

  }));

  return res.json(mhs_obj);
});

module.exports = router;
