import type { Config } from 'tailwindcss'

const config: Config = {
 mode: 'jit',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5956E9',
        label: '#242331',
        dark: '#242424',
        body: '#333',
        body2: '#2F2F2F',
      },
      backgroundImage: {
        card: "url('/images/card-bg.png')",
      },
      screens: {
        'mobile-md': '375px',
        'mobile-lg': '425px',
        tablet: '640px',
        laptop: '1024px',
        'laptop-md': '1440px',
        desktop: '1280px',
        'desktop-lg': '2560px',
      },
    },
  },
  plugins: [],
}
export default config
