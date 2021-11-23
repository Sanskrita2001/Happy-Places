module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				// Configure your color palette here
				dark: '#011627',
				redColor: '#E71D36'
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
