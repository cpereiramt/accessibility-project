import React from 'react';

export default function SimpleForm() {
  return (
    <div>
      <h5>First name</h5>
      <input name="firstName" type="text" placeholder="Enter your first name" />
      <h5>Gender</h5>
      Male <input type="radio" name="gender" value="Male" />
      Female <input type="radio" name="gender" value="Female" />
    </div>
  );
}