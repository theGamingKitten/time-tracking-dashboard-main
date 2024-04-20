/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  /* configure custom colors below */
  theme: {
    colors: {
      'blue': 'hsl(246, 80%, 60%)',
      'light-red-work': 'hsl(15, 100%, 70%)',
      'soft-blue-play': 'hsl(195, 74%, 62%)',
      'light-red-study': 'hsl(348, 100%, 68%)',
      'lime-green-exercise': 'hsl(145, 58%, 55%)',
      'violet-social': 'hsl(264, 64%, 52%)',
      'soft-orange-self-care': 'hsl(43, 84%, 65%)',
      'very-dark-blue': 'hsl(226, 43%, 10%)',
      'dark-blue': 'hsl(235, 46%, 20%)',
      'desaturated-blue': 'hsl(235, 45%, 61%)',
      'pale-blue': 'hsl(236, 100%, 87%)',
      'white': 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      'rubik': 'Rubik',
    },
    extend: {
      backgroundImage: {
        'work': "url('./assets/icon-work.svg')",
        'play': "url('./assets/icon-play.svg')",
        'study': "url('./assets/icon-study.svg')",
        'exercise': "url('./assets/icon-exercise.svg')",
        'social': "url('./assets/icon-social.svg')",
        'self-care': "url('./assets/icon-self-care.svg')",
      }
    },
  },
  plugins: [],
}

