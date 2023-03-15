var express = require('express');
var router = express.Router();

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

    const jurusan = await models.jurusan.findByPk(prodi.id_jurusan, {
      raw: true,
    })

    return {
      nama: mhs.nama_mhs,
      nim: mhs.nim,
      kode_prodi: prodi.kode,
      nama_prodi: prodi.nama_prodi,
      kode_jurusan: jurusan.kode,
      nama_jurusan: jurusan.nama_jurusan
    }

  }))

  return res.json(mhs_obj);
});

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
