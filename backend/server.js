const colors = require('colors');
const express = require('express');

const app = express();

//Body parser
app.use(express.json());

const PORT = process.env.PORT || 5000;

const server = app.listen(
	PORT,
	console.log(`Server running on PORT ${PORT}`.yellow.bold)
);

//Handle unhandled rejection
process.on('unhandledRejection', (err, promise) => {
	console.log(`Error: ${err.message}`.red);
	//Close server & exit process
	server.close(() => process.exit(1));
});
