var options = require('./options.json');
var express = require('express');
var router = new express.Router();
router.use(require('body-parser').json());
router.get('/layer_filters', (req, res) => {
  res.json(options.layerFilters);
});

router.get('/boundary_choices', (req, res) => {
  res.json(options.boundaryChoices);
});

module.exports = router;
