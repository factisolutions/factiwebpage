import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["var(--font-raleway)", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: "#0056b3",
        secondary: "#6c757d",
        dark: "#1a1b3a",
        "deep-violet": "#2d1b69",
        "light-gray": "#f8f9fa",
        brand: {
          blue: "#0056b3",
          teal: "#00D8D6",
          navy: "#120E43",
          "dark-navy": "#1a1b3a",
          "deep-violet": "#2d1b69",
          "accessible-blue": "#1b5fa7",
          gradient: {
            from: "#00D8D6",
            to: "#0056b3",
          },
          "gradient-light": {
            from: "#33E0DE",
            to: "#3366CC",
          },
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "logo-glow": {
          "0%": {
            filter: "drop-shadow(0 0 5px rgba(0, 216, 214, 0.3))",
          },
          "50%": {
            filter: "drop-shadow(0 0 20px rgba(0, 86, 179, 0.5))",
          },
          "100%": {
            filter: "drop-shadow(0 0 5px rgba(0, 216, 214, 0.3))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "logo-glow": "logo-glow 3s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #00D8D6, #0056b3)",
        "gradient-brand-light": "linear-gradient(135deg, #33E0DE, #3366CC)",
        "gradient-dark": "linear-gradient(135deg, #1a1b3a 0%, #2d1b69 50%, #120e43 100%)",
      },
      letterSpacing: {
        brand: "0.05em",
        "brand-wide": "0.08em",
      },
    },
  },
  plugins: [],
}
export default config