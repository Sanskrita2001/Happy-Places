const express = require('express');
const {
	createPlace,
	getPlaces,
	getPlace,
	updatePlace,
	deletePlace,
	placePhotoUpload,
} = require('../controllers/Place');
const upload = require('../middlewares/photoUpload');
const router = express.Router();

//Add routes
router.route('/').post(createPlace).get(getPlaces);

router.route('/:id').get(getPlace).put(updatePlace).delete(deletePlace);

router.route('/:id/photo').post(upload.single('photo'), placePhotoUpload);

module.exports = router;
