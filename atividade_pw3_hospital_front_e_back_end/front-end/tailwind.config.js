module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         colors: {
            primary: '#222831',
            seconday: '#393E46',
            tertiary: '#00ADB5',
            tertiary100: '#0e959c',
            quartiary: '#EEEEEE',
            danger: '#DF4759',
         },
         backgroundColor: (theme) => ({
            //get the value from the color definitions above (7th line from top)
            primary: theme('colors.primary'),
         }),
      },
      fill: ({ theme }) => ({
         primary: theme('colors.primary'),
      }),
   },
   daisyui: {
      styled: true,
      themes: false,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: '',
      darkTheme: 'dark',
   },
   plugins: [require('daisyui')],
};
