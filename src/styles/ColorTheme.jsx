import React from "react";
import {ThemeProvider } from "styled-components";
import darkTheme from './stylesObjects/colorSchemas/darkTheme';
import lightTheme from './stylesObjects/colorSchemas/lightTheme';

const colorTheme = {
 darkTheme,
 lightTheme,    
};

 const chooseTheme = (colorSchema) => {
     switch (colorSchema) {
         case 'light':             
             return colorTheme.lightTheme;
        case 'dark':
            return  colorTheme.darkTheme;  
         default:
             return colorTheme.lightTheme;
     }
  };  
     


  const ColorTheme = ({ children, colorSchema }) => (
    <ThemeProvider theme={chooseTheme(colorSchema)}>{children}
    </ThemeProvider>
  );


  export default ColorTheme;