/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
