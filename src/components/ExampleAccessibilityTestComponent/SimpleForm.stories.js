// YourComponent.stories.js

import React from 'react';

import SimpleForm from './index'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Example/SimpleForm',
  component: SimpleForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <SimpleForm {...args} />;

export const withoutStyle = Template.bind({});

withoutStyle.args = {
  /*👇 The args you need here will depend on your component */
  backgroundColor:'grey',
};

export const roundedBorder = Template.bind({});

roundedBorder.args = {
  /*👇 The args you need here will depend on your component */
  borderRadius : '20px',
  backgroundColor:'grey',
};