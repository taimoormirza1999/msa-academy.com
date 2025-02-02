/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		screens: {
  			ultrawide: '1920px'
  		},
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			red: '#f02d00',
  			ferozi: '#00ffff',
  			purple: '#7f7fff',
  			pink200: '#ff00ff',
  			gray636: '#636363',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			'custom-gradient': 'linear-gradient(to right, #7f7fff, #ff00ff)'
  		},
  		spacing: {
  			'104': '26rem',
  			'128': '32rem'
  		},
  		width: {
  			'60': '60%',
  			'80': '80%',
  			'85': '85%',
  			'90': '90%',
  			'95': '95%',
  			'97': '97%',
  			'98': '98%',
  			'99': '99%',
  			'60vw': '60vw',
  			'70vw': '70vw',
  			'80vw': '80vw',
  			'90vw': '90vw'
  		},
  		height: {
  			'80': '80%',
  			'85': '85%',
  			'90': '90%',
  			'95': '95%',
  			'97': '97%',
  			'98': '98%',
  			'99': '99%',
  			'20vw': '20vw',
  			'30vw': '30vw',
  			'40vw': '40vw',
  			'70vw': '70vw',
  			'80vw': '80vw',
  			'90vw': '90vw'
  		},
  		keyframes: {
  			marquee: {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				'0%': {
  					transform: 'translateY(0)'
  				},
  				'100%': {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			glow: {
  				'0%, 100%': {
  					boxShadow: '0 0 13px 3px rgba(255, 0, 255, 0.5)'
  				},
  				'25%': {
  					boxShadow: '0 0 17px 4px rgba(255, 0, 255, 0.6)'
  				},
  				'50%': {
  					boxShadow: '0 0 21px 6px rgba(255, 0, 255, 0.8)'
  				},
  				'75%': {
  					boxShadow: '0 0 17px 4px rgba(255, 0, 255, 0.6)'
  				}
  			},
			  glowRed: {
				'0%, 100%': {
				  boxShadow: '0 0 20px 7px rgba(255, 0, 0, 0.45)',
				},
				'25%': {
				  boxShadow: '0 0 35px 12px rgba(255, 0, 0, 0.55)',
				},
				'50%': {
				  boxShadow: '0 0 50px 18px rgba(255, 0, 0, 0.7)',
				},
				'75%': {
				  boxShadow: '0 0 35px 12px rgba(255, 0, 0, 0.55)',
				},
			  },
			
			  
  			bounceSlow: {
  				'0%, 100%': {
  					transform: 'translateY(0)',
  					animationTimingFunction: 'ease-in-out'
  				},
  				'50%': {
  					transform: 'translateY(-10px)',
  					animationTimingFunction: 'ease-in-out'
  				}
  			},
  			textGlow: {
  				'0%, 100%': {
  					textShadow: '0 0 15px #ff00ff, 0 0 25px #ff00ff, 0 0 35px #ffffff'
  				},
  				'50%': {
  					textShadow: '0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ff00ff'
  				}
  			}
  		},
  		borderRadius: {
  			primary: '1.8rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			'spin-fast': 'spin 0.8s linear infinite',
  			'animate-glow': 'glow 5.5s infinite ease-in-out',
			 glowRed: 'glowRed 9s infinite ease-in-out',
  			bounceSlow: 'bounceSlow 2.7s infinite ease-in-out',
  			textGlow: 'textGlow 1.7s infinite ease-in-out',
  			marquee: 'marquee 15s linear infinite '
  		},
  		borderWidth: {
  			'3': '3px'
  		},
  		boxShadow: {
  			'inner-left-right': 'inset -30px 0 15px rgba(0, 0, 0, 0.40), inset 30px 0 15px rgba(0, 0, 0, 0.40)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

