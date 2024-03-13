import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color: {
        white: "#FFFFFF",
        black: "#111111",
        gray1: "#525252",
        gray2: "#d4d7db",
        gray3: "#ececec",
        gray4: "#f9fafb",
        bluegray1: "#98a4cd",
        bluegray2: "#d8def2",
        bluegray3: "#e9ecf6",
        bluegray4: "#f4f6fc",
      },
    },
  },
  plugins: [],
};
export default config;
