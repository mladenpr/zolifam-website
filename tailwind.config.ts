import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          background: '#f0efeb',
          primary: '#ce8f5a',
          secondary: '#f0d19a',
          accent1: '#80c8bc',
          accent2: '#6287a2',
          accent3: '#5fc0cc',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#6287a2',
            h1: {
              color: '#ce8f5a',
            },
            h2: {
              color: '#ce8f5a',
            },
            h3: {
              color: '#ce8f5a',
            },
            strong: {
              color: '#ce8f5a',
            },
            a: {
              color: '#80c8bc',
              '&:hover': {
                color: '#5fc0cc',
              },
            },
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config 