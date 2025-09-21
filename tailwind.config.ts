import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translate(-150%, -50%)', opacity: '0' },
          '100%': { transform: 'translate(-0%, -50%)', opacity: '1' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease forwards',
      },
      fontSize: {
        'dynamic': 'clamp(12px, 1.5vw, 18px)', // Agregas la opción de tamaño dinámico
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
