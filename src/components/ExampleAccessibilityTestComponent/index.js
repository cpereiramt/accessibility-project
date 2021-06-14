import React from 'react';

export default function SimpleForm() {
  return (
    <form>
      <h5>First name</h5>
      <input name="firstName" type="text" placeholder="Enter your first name" />
      <h5>Gender</h5>
      <label htmlFor="male">Male</label> <input type="radio" name="gender" value="Male" id="male" />
      <label htmlFor="female">Female</label> <input type="radio" name="gender" value="Female" id="female"/>
    </form>
  );
}