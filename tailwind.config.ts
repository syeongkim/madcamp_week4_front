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
        "potion-background":
          "url('https://syeongkim.github.io/madcamp_week4_front/images/potion_background.jpg')",
        "magic-background":
          "url('https://syeongkim.github.io/madcamp_week4_front/images/magic_background.jpg')",
        "quidditch-background":
          "url('https://syeongkim.github.io/madcamp_week4_front/images/quidditch_background.jpg')",
        "makepotions-background":
          "url('https://syeongkim.github.io/madcamp_week4_front/images/makepotions_background.jpg')",
        "spell-background":
          "url('https://syeongkim.github.io/madcamp_week4_front/images/spell_background.jpg')",
        owl: "url('https://syeongkim.github.io/madcamp_week4_front/images/owl.png')",
        "potion-black-market":
          "url('https://syeongkim.github.io/madcamp_week4_front/images/potion_black_market.png')",
        "paper-background":
          "url('https://syeongkim.github.io/madcamp_week4_front/images/paper_background.jpg')",
        "quidditch-single":
          "url('https://syeongkim.github.io/madcamp_week4_front/images/quidditch_single.jpg')",
        "quidditch-multi":
          "url('https://syeongkim.github.io/madcamp_week4_front/images/quidditch_multi.jpg')",
        "potion-case-background":
          "url('https://syeongkim.github.io/madcamp_week4_front/images/potion_case_background.jpg')",
      },
      backgroundSize: {
        "50%": "50%",
        "75%": "75%",
      },
      fontFamily: {
        Harry: ["Harry P", "sans-serif"],
        Animales: ["Animales Fantastic", "sans-serif"],
        Nanum: ["Gowun Batang", "serif"], // 원하는 폰트 이름 설정
      },
      fontSize: {
        xxs: "0.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
