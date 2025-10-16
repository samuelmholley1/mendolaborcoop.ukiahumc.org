import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'headline': ['Merriweather', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        'coop': {
          // Solidarity red - worker power
          'red': '#d63031',
          // Deep forest green - environmental justice
          'green': '#00b894',
          // Golden yellow - prosperity and hope
          'gold': '#fdcb6e',
          // Warm earth brown - groundedness and community
          'earth': '#8b5a2b',
          // Deep blue - stability and trust
          'blue': '#0984e3',
          // Light backgrounds
          'cream': '#fef9f3',
          'light': '#f9f9f9',
        },
      },
      backgroundColor: {
        'warm': '#fef9f3',
        'light': '#f9f9f9',
      },
    },
  },
  plugins: [],
}
export default config