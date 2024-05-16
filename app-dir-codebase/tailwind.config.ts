import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './src/styles/partials/**/*'],
    darkMode: 'class',
    theme: {
        screens: {
            xs: '480px',
            sm: '640px',
            // => @media (min-width: 640px) { ... }
            md: '768px',
            // => @media (min-width: 768px) { ... }
            lg: '1024px',
            // => @media (min-width: 1024px) { ... }
            xl: '1280px',
            // => @media (min-width: 1280px) { ... }
            '2xl': '1536px',
            '3xl': '1600px',
        },
        container: {
            center: true,
            padding: '2rem',
            screens: {
                sm: '640px', // Set max-width for small screens (e.g., mobile)
                md: '768px', // Set max-width for medium screens (e.g., tablet)
                lg: '1024px', // Set max-width for large screens (e.g., laptop)
                xl: '1320px', // Set max-width for extra-large screens (e.g., desktop)
                xxl: '1536px',
                xxxl: '1600px',
            },
        },
        backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        fontFamily: {
            notoRegular: ['Noto-Regular', 'sans-serif'],
            notoMedium: ['Noto-Medium', 'sans-serif'],
            notoBold: ['Noto-Bold', 'sans-serif'],
            noto: ['Noto-Medium', 'sans-serif'],

            railwayLight: ['Railway-Light', 'sans-serif'],
            railwayMedium: ['Railway-Medium', 'sans-serif'],
            railwayBold: ['Railway-Bold', 'sans-serif'],

            robotoLight: ['Roboto-Light', 'sans-serif'],
            robotoRegular: ['Roboto-Regular', 'sans-serif'],
            robotoMedium: ['Roboto-Medium', 'sans-serif'],
            robotoBold: ['Roboto-Bold', 'sans-serif'],
        },
        fontSize: {
            8: 'var(--font-8)',
            10: 'var(--font-10)',
            12: 'var(--font-12)',
            14: 'var(--font-14)',
            16: 'var(--font-16)',
            18: 'var(--font-18)',
            22: 'var(--font-22)',
            26: 'var(--font-26)',
            30: 'var(--font-30)',
            34: 'var(--font-34)',
            38: 'var(--font-38)',
        },
        fontWeight: {
            100: '100',
            200: '200',
            300: '300',
            400: '400',
            500: '500',
            600: '600',
            700: '700',
            800: '800',
        },
        lineHeight: {
            16: '16px',
            24: '24px',
            27: '27px',
            35: '35px',
            45: '45px',
        },
        letterSpacing: {
            tightest: '-.075em',
            tighter: '-.05em',
            tight: '-.025em',
            normal: '0',
            wide: '.025em',
            wider: '.05em',
            widest: '.1em',
        },
        textIndent: {
            '128': '32rem',
        },
        spacing: {
            0: '0',
            1: '1px',
            2: 'var(--space-2)',
            3: 'var(--space-3)',
            4: 'var(--space-4)',
            5: 'var(--space-5)',
            6: 'var(--space-6)',
            7: 'var(--space-7)',
            8: 'var(--space-8)',
            9: 'var(--space-9)',
            10: 'var(--space-10)',
            12: 'var(--space-12)',
            14: 'var(--space-14)',
            16: 'var(--space-16)',
            20: 'var(--space-20)',
            30: 'var(--space-30)',
            40: 'var(--space-40)',
            60: 'var(--space-60)',
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwind-scrollbar-hide'), require('tailwindcss-animate')],
}
export default config
