// YourComponent.stories.js

import React from 'react';

import SimpleForm from './index'

//π This default export determines where your story goes in the story list
export default {
  title: 'Presentational-Components/SimpleForm',
  component: SimpleForm,
  argTypes: {
    backgroundColor: { control: 'color' },
    padding:{ control : 'number'}
  },
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => <SimpleForm {...args} />;

export const withoutStyle = Template.bind({});

withoutStyle.args = {
  /*π The args you need here will depend on your component */
};

export const roundedBorder = Template.bind({});

roundedBorder.args = {
  /*π The args you need here will depend on your component */
  borderRadius : '20px',
  padding:'10px'
};