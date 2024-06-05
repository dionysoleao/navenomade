/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["../../**/*.{html,htm,php,js}"],
	theme: {
		extend: {
			colors: {
				'offwhite': {
					DEFAULT:'#f8f8f8',
					'50': '#f8f8f8',
					'100': '#efefef',
					'200': '#dcdcdc',
					'300': '#bdbdbd',
					'400': '#989898',
					'500': '#7c7c7c',
					'600': '#656565',
					'700': '#525252',
					'800': '#464646',
					'900': '#3d3d3d',
					'950': '#292929',
				},
				'offblack':'#060606',
				'midblue': {
					100: '#DDEBF8',
					300: '#6CB2F4',
					500: '#0266C0',
					600: '#243e8e',
					700: '#003669',
				},
				'emerald': {
					'50': '#f0fdf6',
					'100': '#dbfdeb',
					'200': '#b9f9d7',
					'300': '#83f2b8',
					'400': '#2fdf84',
					'500': '#1dca71',
					'600': '#12a75b',
					'700': '#128349',
					'800': '#14673d',
					'900': '#125535',
					'950': '#042f1b',
				},

			}
		}
		
	},
	plugins: ["prettier-plugin-tailwindcss", "postcss-	"],
	corePlugins: {
		preflight: false,
		textOpacity: false,
		backgroundOpacity: false,
		borderOpacity: false,
		divideOpacity: false,
		placeholderOpacity: false,
		ringOpacity: false,
	},
	experimental: {
		optimizeUniversalDefaults: true,
	},
}
