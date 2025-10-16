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
        'headline': ['Public Sans', 'sans-serif'],
        'body': ['Source Sans 3', 'sans-serif'],
      },
      colors: {
        // Brand color tokens
        'redwood': 'var(--redwood)',
        'moss': 'var(--moss)',
        'river': 'var(--river)',
        'sand': 'var(--sand)',
        'cream': 'var(--cream)',
        // Legacy coop colors for existing components
        'coop': {
          'red': '#d63031',
          'green': '#00b894',
          'gold': '#fdcb6e',
          'earth': '#8b5a2b',
          'blue': '#0984e3',
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