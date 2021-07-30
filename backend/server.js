const colors = require('colors');
const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/error');

//Load env files
dotenv.config({ path: __dirname + '/.env' });

//Connect to Database
connectDB();

//Route files
const places = require('./routes/Place');
const subplaces = require('./routes/SubPlace');
const spots = require('./routes/Spot');
const hotels = require('./routes/Hotel');
const auth = require('./routes/Auth');

const app = express();

//Body parser
app.use(express.json());

//Mount routers
app.use('/api/v1/places', places);
app.use('/api/v1/subplaces', subplaces);
app.use('/api/v1/spots/', spots);
app.use('/api/v1/hotels/', hotels);
app.use('/api/v1/auth/', auth);

app.use(errorHandler);

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
