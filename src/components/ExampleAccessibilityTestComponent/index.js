import React from 'react';
import PropTypes from 'prop-types';


export default function SimpleForm({backgroundColor, borderRadius}) {
  return (
    <form style={{backgroundColor: backgroundColor, borderRadius: `${borderRadius}%`}}>
      <h5>First name</h5>
      <input name="firstName" type="text" placeholder="Enter your first name" />
      <h5>Gender</h5>
      <label htmlFor="male">Male</label> <input type="radio" name="gender" value="Male" id="male" />
      <label htmlFor="female">Female</label> <input type="radio" name="gender" value="Female" id="female"/>
    </form>
  );
}

SimpleForm.propTypes = {
  backgroundColor : PropTypes.string,
  borderRadius : PropTypes.number
};

SimpleForm.defaultProps = {

};