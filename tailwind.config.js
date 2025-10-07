/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        // Phong cách vùng quê - màu nâu gỗ, vàng rơm, xanh lá
        countryside: {
          wood: {
            50: '#faf7f3',
            100: '#f5ede3',
            200: '#e8d5c1',
            300: '#d4b896',
            400: '#b8966b',
            500: '#9d7a4d',
            600: '#7f6340',
            700: '#634d33',
            800: '#4d3b27',
            900: '#3a2d1e',
          },
          straw: {
            50: '#fefbf0',
            100: '#fcf5d9',
            200: '#f9ecb3',
            300: '#f4dd84',
            400: '#edc851',
            500: '#e0b62f',
            600: '#c99921',
            700: '#a87a1d',
            800: '#875f1c',
            900: '#6f4e1b',
          },
          leaf: {
            50: '#f3f9f1',
            100: '#e3f2df',
            200: '#c9e5c2',
            300: '#9fd095',
            400: '#6fb45f',
            500: '#4a9a3d',
            600: '#377d2d',
            700: '#2d6225',
            800: '#274e21',
            900: '#22411d',
          },
          earth: {
            50: '#f8f6f3',
            100: '#ede8e1',
            200: '#ddd3c5',
            300: '#c7b8a3',
            400: '#b09a7e',
            500: '#9d8566',
            600: '#8a7359',
            700: '#725e4b',
            800: '#5f4f40',
            900: '#4e4135',
          },
        },
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        display: ['"Quicksand"', '"Nunito"', 'Inter', 'ui-sans-serif', 'system-ui'],
        sans: ['"Nunito"', 'Inter', 'ui-sans-serif', 'system-ui'],
        handwriting: ['"Caveat"', '"Patrick Hand"', 'cursive'],
      },
      backgroundImage: {
        'kraft-texture': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3CfeColorMatrix values='0 0 0 0 0.8, 0 0 0 0 0.7, 0 0 0 0 0.5, 0 0 0 0.05 0'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E\")",
        'leaf-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 Q 35 15 30 25 Q 25 15 30 10' fill='%234a9a3d' opacity='0.05'/%3E%3Cpath d='M45 30 Q 50 35 45 45 Q 40 35 45 30' fill='%234a9a3d' opacity='0.05'/%3E%3Cpath d='M15 45 Q 20 50 15 60 Q 10 50 15 45' fill='%234a9a3d' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'handdrawn': '3px 3px 0px 0px rgba(0,0,0,0.1)',
        'sticker': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@tailwindcss/forms'),
  ],
}
