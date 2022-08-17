/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            animation: {
                active: "active 0.5s linear",
            },
            keyframes: {
                active: {
                    "0%, 100%": { transform: "scale(1)" },
                    "60%": { transform: "scale(1.1)" },
                },
            },
        },
    },
    plugins: [],
};
