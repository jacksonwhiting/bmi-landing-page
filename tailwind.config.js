/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			textColor: {
				skin: {
					"hdg-pri": "#253347",
					"content-pri": "#5E6E85",
					"accent-pri": "#FFFFFF",
					"accent-sec": "#345ff6",
				},
			},
			backgroundColor: {
				skin: {
					"canvas-pri": "#FFFFFF",
					"fill-pri": "#D6E6FE",
					"fill-sec": "#345FF6",
				},
      },
      borderColor: {
        "border-pri": "#D8E2E7",
      },
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			fontSize: {
				hdgXL: ["4rem", "110%"],
        		hdgL: ["3rem", "110%"],
				hdgM: ["1.5rem", "110%"],
				hdgS: ["1.25rem", "110%"],
				bodyM: ["1rem", "170%"],
				hdgS: [".875rem", "150%"],
			},
			boxShadow: {
        '3xl': '15px 15px 50px -5px rgba(0, 0, 0, 0.6)',
      	},
		},
	},
	plugins: [
    require('@tailwindcss/forms'),
  ],
};


