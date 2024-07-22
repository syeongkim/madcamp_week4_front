import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "potion-background": "url('/images/potion_background.jpg')",
        "magic-background": "url('/images/magic_background.jpg')",
        "quidditch-background": "url('/images/quidditch_background.jpg')",
        "makepotions-background": "url('/images/makepotions_background.jpg')",
        "spell-background": "url('/images/spell_background.jpg')",
      },
      backgroundSize: {
        '50%': '50%',
        '75%': '75%',
      },
      fontFamily: {
        Harry: ["Harry P", "sans-serif"],
        Animales: ["Animales Fantastic", "sans-serif"],
        Nanum: ['Gowun Batang', 'serif'], // 원하는 폰트 이름 설정
      },
      fontSize: {
        "xxs": "0.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
