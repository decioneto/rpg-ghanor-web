import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                ghanor: {
                    clay: {
                        "100": "#572222",
                    },
                    yellow: {
                        "100": "#AB893A",
                        "300": "#CDB273",
                        "700": "#DDDCD9",
                    },
                    neutral: {
                        "0": "#0A0A0A",
                        "200": "#131313",
                        "300": "#242424",
                        "400": "#353535",
                        "500": "#505050",
                        "700": "#A3A3A3",
                    },
                    status: {
                        warning: "#D33B3B",
                        success: "#74BE39",
                    },
                },
            },
            backgroundImage: {
                "scale-bg-l": "url(/images/scales-bg-l.jpg)",
                "scale-bg-r": "url(/images/scales-bg-r.jpg)",
            },
            fontFamily: {
                body: "var(--font-inter)",
                title: "var(--font-inknut-antiqua)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
