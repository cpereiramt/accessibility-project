

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },    
  },
  
}

import { withThemesProvider } from "themeprovider-storybook";

// Options:
const themes = [
  {
    name: 'Theme1', // Required it's used for displaying the button label,
    backgroundColor: '#fff' // Optional, it's used for setting dynamic background color on storybook
  },
  {
    name: 'Theme2', // Required it's used for displaying the button label,
    backgroundColor: '#000'// Optional, it's used for setting dynamic background color on storybook
   // Your theme keys (Check example if you need some help)
  }
]

export const decorators = [withThemesProvider(themes)];
