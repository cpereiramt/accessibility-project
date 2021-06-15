

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
import lightTheme from '../src/styles/stylesObjects/colorSchemas/lightTheme';
import darkTheme from '../src/styles/stylesObjects/colorSchemas/darkTheme'


// Options:
const themes = [
  lightTheme,
  darkTheme
]

export const decorators = [withThemesProvider(themes)];
