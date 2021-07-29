var multer = require('multer');

//Configuration for Multer
const multerStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'backend/public/uploads');
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({
	storage: multerStorage,
});

module.exports = upload;
