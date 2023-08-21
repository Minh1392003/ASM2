var express = require('express');
const Toy1Models = require('../models/toy1Model');
const Toy2Models = require('../models/toy2Model');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index' );
});

router.get('/listcar', async (req, res) => {
  var tos1 = await Toy1Models.find({});
  res.render('listcar', { tos1: tos1 });
})

router.get('/listlego', async (req, res) => {
  var tos2 = await Toy2Models.find({});
  res.render('listlego', { tos2: tos2 });
})

router.get('/detailproduct1/:id', async (req, res) => {
  const id = req.params.id;
  const detail = await Toy1Models.findById(id);
  res.render('detailproduct1', { detail: detail });
});

router.get('/detailproduct2/:id', async (req, res) => {
  const id = req.params.id;
  const detail1 = await Toy2Models.findById(id);
  res.render('detailproduct2', { detail1: detail1 });
});


module.exports = router;
