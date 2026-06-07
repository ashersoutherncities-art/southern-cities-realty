import type { Config } from 'tailwindcss'

const extraOpacity = Object.fromEntries(
  Array.from({ length: 101 }, (_, i) => [i.toString(), (i / 100).toString()]),
)

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#f8b98f',
          400: '#f7a15f',
          500: '#fa8c41',
        },
        navy: {
          950: '#132452',
        },
        cream: {
          50: '#fbf7f1',
        },
      },
      opacity: extraOpacity,
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
