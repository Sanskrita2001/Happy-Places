const express = require('express');
const {
	getSpots,
	addSpot,
	getSpot,
	updateSpot,
	deleteSpot,
	spotPhotoUpload,
} = require('../controllers/Spot');
const router = express.Router({ mergeParams: true });
const upload = require('../middlewares/photoUpload');

//Add routers
router.route('/').get(getSpots).post(addSpot);

router.route('/:id').get(getSpot).put(updateSpot).delete(deleteSpot);

router.route('/:id/photo').post(upload.single('photo'), spotPhotoUpload);

module.exports = router;
