const express = require('express');
const {
	getSubPlaces,
	addSubPlace,
	getSubPlace,
	updateSubPlace,
	deleteSubPlace,
	subPlacePhotoUpload,
} = require('../controllers/SubPlace');
const upload = require('../middlewares/photoUpload');

const router = express.Router({ mergeParams: true });

//Add routers
router.route('/').get(getSubPlaces).post(addSubPlace);

router
	.route('/:id')
	.get(getSubPlace)
	.put(updateSubPlace)
	.delete(deleteSubPlace);

router.route('/:id/photo').post(upload.single('photo'), subPlacePhotoUpload);

module.exports = router;
