var express = require('express');
var router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/*set up controllers*/
const homepageController = (req, res) => {
  res.render('index', { title: 'Express'});
}

/* GET home page. */
// router.get('/', ctrlMain.index);

/*Locations pages */
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/*Other Pages*/
router.get('/about', ctrlOthers.about);

module.exports = router;
