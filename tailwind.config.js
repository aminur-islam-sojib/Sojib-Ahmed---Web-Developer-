/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        // Your main colors (hex values, no hsl)
        primary: 'var(--primary)',
        foreground: 'var(--foreground)',

        // Basic UI colors (hsl values)
        background: 'hsl(var(--background))',
        card: 'hsl(var(--card))',
        border: 'hsl(var(--border))',
        'muted-foreground': 'hsl(var(--muted-foreground))',

        // Gradient colors (if you need them)
        'gradient-start': 'var(--gradient-start)',
        'gradient-end': 'var(--gradient-end)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
