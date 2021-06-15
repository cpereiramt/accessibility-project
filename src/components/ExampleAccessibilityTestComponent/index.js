import React from 'react';
import PropTypes from 'prop-types';
import {useTheme } from 'styled-components';


export default function SimpleForm({backgroundColor, borderRadius, padding}) {
  const theme = useTheme();
  return (
    <form style={{backgroundColor: backgroundColor, borderRadius: `${borderRadius}px`, padding: `${padding}px`}}>
      {console.log(theme)}
      <h5 style={{color: theme.font.color}}>First name</h5>
      <input name="firstName" type="text" placeholder="Enter your first name" />
      <h5 style={{color: theme.font.color}}>Gender</h5>
      <label style={{color: theme.font.color}} htmlFor="male">Male</label> <input type="radio" name="gender" value="Male" id="male" />
      <label style={{color: theme.font.color}} htmlFor="female">Female</label> <input type="radio" name="gender" value="Female" id="female"/>
    </form>
  );
}

SimpleForm.propTypes = {
  backgroundColor : PropTypes.string,
  borderRadius : PropTypes.number,
  padding : PropTypes.number,
};

SimpleForm.defaultProps = {

};